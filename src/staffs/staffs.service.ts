import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectId } from 'mongodb';
import { MongoRepository } from 'typeorm';
import { CreateStaffDTO } from './dto/staff.dto';
import { Staff } from './entities/staffs.entity';

@Injectable()
export class StaffsService {
  constructor(
    @InjectRepository(Staff) 
    private staffRepository: MongoRepository<Staff>
  ) {}

  async createStaff(@Body() staff: CreateStaffDTO) {
    return await this.staffRepository.save(staff);
  }

  async getStaff(staffId: string): Promise<Staff> {
    return await this.staffRepository.findOneBy({
      '_id': new ObjectId(staffId)
    });
  }

  async getAllStaffs(): Promise<Staff[]> {
    return await this.staffRepository.find();
  }

  async updateStaff(staffId: string, staff: CreateStaffDTO): Promise<any> {
    return await this.staffRepository.updateOne(
      { '_id': new ObjectId(staffId) }, 
      {
        $set: staff, 
      },
      { upsert: true }
    );
  }

  async deleteStaff(staffId: string,): Promise<any> {
    return await this.staffRepository.findOneAndDelete(
      { '_id': new ObjectId(staffId) }
    );
  }
}
