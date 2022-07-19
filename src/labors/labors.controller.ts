import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Response } from 'express';
import { MongoRepository } from 'typeorm';

import { CreateLaborDTO } from './dto/labor.dto';
import { Labor } from './entities/labors.entity';

@Controller('labors')
export class LaborsController {
  constructor(
    @InjectRepository(Labor) 
    private laborRepository: MongoRepository<Labor>
  ) {}

  @Post('/create')
  async createLabor(@Res() res: Response, @Body() createLaborDTO: CreateLaborDTO) {
    console.log(createLaborDTO);
    await this.laborRepository.save(createLaborDTO);

    res.status(HttpStatus.OK).json({
      message: 'received'
    });
  }
}
