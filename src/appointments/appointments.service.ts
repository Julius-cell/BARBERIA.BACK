import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectId } from 'mongodb';
import { MongoRepository } from 'typeorm';
import { CreateAppointmentDTO } from './dto/appointment.dto';
import { Appointment } from './entities/appointments.entity';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(Appointment) 
    private appointmentRepository: MongoRepository<Appointment>
  ) {}

  async createAppointment(@Body() appointment: CreateAppointmentDTO) {
    return await this.appointmentRepository.save(appointment);
  }

  async getAppointment(appointmentId: string): Promise<Appointment> {
    return await this.appointmentRepository.findOneBy({
      '_id': new ObjectId(appointmentId)
    });
  }

  async getAllAppointments(): Promise<Appointment[]> {
    return await this.appointmentRepository.find();
  }

  async updateAppointment(appointmentId: string, appointment: CreateAppointmentDTO): Promise<any> {
    return await this.appointmentRepository.updateOne(
      { '_id': new ObjectId(appointmentId) }, 
      {
        $set: appointment, 
      },
      { upsert: true }
    );
  }

  async deleteAppointment(appointmentId: string,): Promise<any> {
    return await this.appointmentRepository.findOneAndDelete(
      { '_id': new ObjectId(appointmentId) }
    );
  }
}
