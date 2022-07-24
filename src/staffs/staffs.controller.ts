import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { CreateStaffDTO } from './dto/staff.dto';
import { StaffsService } from './staffs.service';

@Controller('staffs')
export class StaffsController {
  constructor(private staffService: StaffsService) {}

  @Get('')
  async getAllStaffs(@Res() res: Response) {
    const staffs = await this.staffService.getAllStaffs();

    res.status(HttpStatus.OK).json({
      message: 'received',
      data: staffs
    });
  }

  @Get(':id')
  async getStaff(@Param() params, @Res() res: Response) {
    const staffs = await this.staffService.getStaff(params.id);

    res.status(HttpStatus.OK).json({
      message: 'received',
      data: staffs
    });
  }

  @Post('/create')
  async createStaff(@Res() res: Response, @Body() staff: CreateStaffDTO) {
    const newStaff = await this.staffService.createStaff(staff);

    res.status(HttpStatus.OK).json({
      message: 'received',
      data: newStaff
    });
  }

  @Patch('/update/:id')
  async updateStaff(@Param() params, @Res() res: Response, @Body() staff: CreateStaffDTO) {
    const updatedStaff = await this.staffService.updateStaff(params.id, staff);

    res.status(HttpStatus.OK).json({
      message: 'received',
      data: updatedStaff
    });
  }

  @Delete('/delete/:id')
  async deleteStaff(@Param() params, @Res() res: Response) {
    const updatedStaff = await this.staffService.deleteStaff(params.id);
    
    res.status(HttpStatus.OK).json({
      message: 'received',
      data: updatedStaff
    });
  }
}
