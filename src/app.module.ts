import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm'

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsController } from './clients/clients.controller';
import { AppointmentsController } from './appointments/appointments.controller';
import { LaborsController } from './labors/labors.controller';
import { StaffsController } from './staffs/staffs.controller';
import { config } from './config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'mongodb',
        database:'julio',
        url: `mongodb+srv://${configService.get('database.username')}:${configService.get('database.password')}@cluster0.5oug2.mongodb.net/?retryWrites=true&w=majority`,
        logging: true
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
    ClientsController, 
    AppointmentsController, 
    LaborsController, 
    StaffsController,
  ],
  providers: [AppService],
})
export class AppModule {}
