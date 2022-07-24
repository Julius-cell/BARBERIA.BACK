import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectId } from 'mongodb';
import { MongoRepository } from 'typeorm';
import { CreateLaborDTO } from './dto/labor.dto';
import { Labor } from './entities/labors.entity';

@Injectable()
export class LaborsService {
  constructor(
    @InjectRepository(Labor) 
    private laborRepository: MongoRepository<Labor>
  ) {}

  async createLabor(@Body() labor: CreateLaborDTO) {
    return await this.laborRepository.save(labor);
  }

  async getLabor(laborId: string): Promise<Labor> {
    return await this.laborRepository.findOneBy({
      '_id': new ObjectId(laborId)
    });
  }

  async getAllLabors(): Promise<Labor[]> {
    return await this.laborRepository.find();
  }

  async updateLabor(laborId: string, labor: CreateLaborDTO): Promise<any> {
    return await this.laborRepository.updateOne(
      { '_id': new ObjectId(laborId) }, 
      {
        $set: labor, 
      },
      { upsert: true }
    );
  }

  async deleteLabor(laborId: string,): Promise<any> {
    return await this.laborRepository.findOneAndDelete(
      { '_id': new ObjectId(laborId) }
    );
  }
}
