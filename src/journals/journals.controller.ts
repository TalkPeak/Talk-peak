import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { JournalsService } from './journals.service';
import { CreateJournalDto } from './dto/create-journal.dto';
import { UpdateJournalDto } from './dto/update-journal.dto';

@Controller('journals')
export class JournalsController {
  constructor(private readonly journalsService: JournalsService) {}

  @Post()
  async create(@Body() createJournalDto: CreateJournalDto) {
    return this.journalsService.create(createJournalDto);
  }

  @Get(':userId')
  async findAll(@Param('userId') userId: string) {
    return this.journalsService.findAll(+userId);
  }

  @Get()
  async find() {
    return this.journalsService.find();
  }

  @Get(':journalId')
  async findOne(@Param('journalId') journalId: string) {
    return this.journalsService.findOne(+journalId);
  }

  @Put(':journalId')
  async update(
    @Param('journalId') journalId: string,
    @Body() updateJournalDto: UpdateJournalDto,
  ) {
    return this.journalsService.update(+journalId, updateJournalDto);
  }

  @Delete(':journalId')
  async remove(@Param('journalId') journalId: string) {
    return this.journalsService.remove(+journalId);
  }
}
