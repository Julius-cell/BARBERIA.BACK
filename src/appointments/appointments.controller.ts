import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Response } from 'express';
import { MongoRepository } from 'typeorm';

import { CreateAppointmentDTO } from './dto/appointment.dto';
import { Appointment } from './entities/appointments.entity';


@Controller('appointments')
export class AppointmentsController {
  constructor(
    @InjectRepository(Appointment) 
    private appoiintmentRepository: MongoRepository<Appointment>
  ) {}

  @Post('/create')
  async createAppointment(@Res() res: Response, @Body() createAppointmentDTO: CreateAppointmentDTO) {
    console.log(createAppointmentDTO);
    await this.appoiintmentRepository.save(createAppointmentDTO);

    res.status(HttpStatus.OK).json({
      message: 'received'
    });
  }
}
