import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Response } from 'express';

import { Staff } from './entities/staffs.entity';
import { CreateStaffDTO } from './dto/staff.dto';

@Controller('staffs')
export class StaffsController {
  constructor(
    @InjectRepository(Staff) 
    private staffRepository: MongoRepository<Staff>
  ) {}

  @Post('/create')
  async createStaff(@Res() res: Response, @Body() createStaffDTO: CreateStaffDTO) {
    console.log(createStaffDTO);
    await this.staffRepository.save(createStaffDTO);

    res.status(HttpStatus.OK).json({
      message: 'received'
    });
  }
}
