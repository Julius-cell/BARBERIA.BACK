import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm'

import { AppointmentsModule } from './appointments/appointments.module';
import { ClientsModule } from './clients/clients.module';
import { LaborsModule } from './labors/labors.module';
import { StaffsModule } from './staffs/staffs.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './config';

import { Staff } from './staffs/entities/staffs.entity';
import { Appointment } from './appointments/entities/appointments.entity';
import { Labor } from './labors/entities/labors.entity';
import { Client } from './clients/entities/clients.entity';

@Module({
  imports: [
    AppointmentsModule,
    ClientsModule,
    LaborsModule,
    StaffsModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'mongodb',
        database:'Barbería-Inglesa',
        url: `mongodb+srv://${configService.get('database.username')}:${configService.get('database.password')}@cluster0.5oug2.mongodb.net/?retryWrites=true&w=majority`,
        entities: [
          Staff, 
          Appointment,
          Labor,
          Client
        ],
      }),
      inject: [ConfigService]
    }),
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
      isGlobal: true,
      cache: true,
      load: [config]
    }),
  ],
  controllers: [
    AppController, 
  ],
  providers: [AppService],
})
export class AppModule {}
