import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJournalDto } from './dto/create-journal.dto';
import { UpdateJournalDto } from './dto/update-journal.dto';
import { Journal } from './entities/journal.entity';

@Injectable()
export class JournalsService {
  constructor(
    @InjectRepository(Journal)
    private journalsRepository: Repository<Journal>,
  ) {}

  async create(createJournalDto: CreateJournalDto): Promise<Journal> {
    const journal = this.journalsRepository.create(createJournalDto);
    return this.journalsRepository.save(journal);
  }

  async findAll(userId: number): Promise<Journal[]> {
    return this.journalsRepository.find({
      where: { user: { id: userId } }, // userId로 필터링
    });
  }

  async findOne(id: number): Promise<Journal | undefined> {
    return this.journalsRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateJournalDto: UpdateJournalDto,
  ): Promise<Journal | undefined> {
    const journal = await this.journalsRepository.findOneBy({ id });
    if (!journal) {
      return undefined;
    }
    Object.assign(journal, updateJournalDto);
    return this.journalsRepository.save(journal);
  }

  async remove(id: number): Promise<void> {
    await this.journalsRepository.delete(id);
  }
}
