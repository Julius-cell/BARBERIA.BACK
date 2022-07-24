import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDTO } from './dto/appointment.dto';


@Controller('appointments')
export class AppointmentsController {
  constructor(private appoiintmentService: AppointmentsService) {}

  @Get('')
  async getAllAppointments(@Res() res: Response) {
    const appoiintments = await this.appoiintmentService.getAllAppointments();

    res.status(HttpStatus.OK).json({
      message: 'received',
      data: appoiintments
    });
  }

  @Get(':id')
  async getAppointment(@Param() params, @Res() res: Response) {
    const appoiintments = await this.appoiintmentService.getAppointment(params.id);

    res.status(HttpStatus.OK).json({
      message: 'received',
      data: appoiintments
    });
  }

  @Post('/create')
  async createAppointment(@Res() res: Response, @Body() appoiintment: CreateAppointmentDTO) {
    const newAppointment = await this.appoiintmentService.createAppointment(appoiintment);

    res.status(HttpStatus.OK).json({
      message: 'received',
      data: newAppointment
    });
  }

  @Patch('/update/:id')
  async updateAppointment(@Param() params, @Res() res: Response, @Body() appoiintment: CreateAppointmentDTO) {
    const updatedAppointment = await this.appoiintmentService.updateAppointment(params.id, appoiintment);

    res.status(HttpStatus.OK).json({
      message: 'received',
      data: updatedAppointment
    });
  }

  @Delete('/delete/:id')
  async deleteAppointment(@Param() params, @Res() res: Response) {
    const updatedAppointment = await this.appoiintmentService.deleteAppointment(params.id);
    
    res.status(HttpStatus.OK).json({
      message: 'received',
      data: updatedAppointment
    });
  }
}
