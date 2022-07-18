import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { CreateAppointmentDTO } from './dto/appointment.dto';


@Controller('appointments')
export class AppointmentsController {

  @Post('/create')
  createAppointment(@Res() res: Response, @Body() createAppointmentDTO: CreateAppointmentDTO) {
    console.log(createAppointmentDTO);
    
    res.status(HttpStatus.OK).json({
      message: 'received'
    });
  }

  // @Get('/')
  // getAppointments() {

  // }


}
