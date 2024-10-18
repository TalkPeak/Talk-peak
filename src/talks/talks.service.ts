import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTalkDto } from './dto/create-talk.dto';
import { Talk } from './entities/talk.entity';

@Injectable()
export class TalksService {
  constructor(
    @InjectRepository(Talk)
    private talksRepository: Repository<Talk>,
  ) {}

  // talk 객체를 저장
  async create(createTalkDto: CreateTalkDto): Promise<Talk> {
    const talk = this.talksRepository.create(createTalkDto);
    return this.talksRepository.save(talk);
  }

  async findAll(): Promise<
    { answer1: string; answer2: string; answer3: string }[]
  > {
    const talks = await this.talksRepository.find();
    return talks.map((talk) => ({
      answer1: talk.answer1,
      answer2: talk.answer2,
      answer3: talk.answer3,
    }));
  }

  // answer1, 2, 3 조회
  async findOne(id: number): Promise<Talk | undefined> {
    return this.talksRepository.findOneBy({ id });
  }
}
