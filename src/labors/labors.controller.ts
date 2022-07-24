import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateLaborDTO } from './dto/labor.dto';
import { LaborsService } from './labors.service';

@Controller('labors')
export class LaborsController {
  constructor(private laborService: LaborsService) {}

  @Get('')
  async getAllLabors(@Res() res: Response) {
    const labors = await this.laborService.getAllLabors();

    res.status(HttpStatus.OK).json({
      message: 'received',
      data: labors
    });
  }

  @Get(':id')
  async getLabor(@Param() params, @Res() res: Response) {
    const labors = await this.laborService.getLabor(params.id);

    res.status(HttpStatus.OK).json({
      message: 'received',
      data: labors
    });
  }

  @Post('/create')
  async createLabor(@Res() res: Response, @Body() labor: CreateLaborDTO) {
    const newLabor = await this.laborService.createLabor(labor);

    res.status(HttpStatus.OK).json({
      message: 'received',
      data: newLabor
    });
  }

  @Patch('/update/:id')
  async updateLabor(@Param() params, @Res() res: Response, @Body() labor: CreateLaborDTO) {
    const updatedLabor = await this.laborService.updateLabor(params.id, labor);

    res.status(HttpStatus.OK).json({
      message: 'received',
      data: updatedLabor
    });
  }

  @Delete('/delete/:id')
  async deleteLabor(@Param() params, @Res() res: Response) {
    const updatedLabor = await this.laborService.deleteLabor(params.id);
    
    res.status(HttpStatus.OK).json({
      message: 'received',
      data: updatedLabor
    });
  }
}
