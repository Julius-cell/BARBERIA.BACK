import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Labor } from './entities/labors.entity';
import { LaborsController } from './labors.controller';
import { LaborsService } from './labors.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Labor])
  ],
  controllers: [
    LaborsController
  ],
  providers: [LaborsService]
})
export class LaborsModule {}
