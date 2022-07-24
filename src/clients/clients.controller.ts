import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { ClientsService } from './clients.service';
import { CreateClientDTO } from './dto/client.dto';

@Controller('clients')
export class ClientsController {
  constructor(private clientService: ClientsService) {}

  @Get('')
  async getAllClients(@Res() res: Response) {
    const clients = await this.clientService.getAllClients();

    res.status(HttpStatus.OK).json({
      message: 'received',
      data: clients
    });
  }

  @Get(':id')
  async getClient(@Param() params, @Res() res: Response) {
    const clients = await this.clientService.getClient(params.id);

    res.status(HttpStatus.OK).json({
      message: 'received',
      data: clients
    });
  }

  @Post('/create')
  async createClient(@Res() res: Response, @Body() client: CreateClientDTO) {
    const newClient = await this.clientService.createClient(client);

    res.status(HttpStatus.OK).json({
      message: 'received',
      data: newClient
    });
  }

  @Patch('/update/:id')
  async updateClient(@Param() params, @Res() res: Response, @Body() client: CreateClientDTO) {
    const updatedClient = await this.clientService.updateClient(params.id, client);

    res.status(HttpStatus.OK).json({
      message: 'received',
      data: updatedClient
    });
  }

  @Delete('/delete/:id')
  async deleteClient(@Param() params, @Res() res: Response) {
    const updatedClient = await this.clientService.deleteClient(params.id);
    
    res.status(HttpStatus.OK).json({
      message: 'received',
      data: updatedClient
    });
  }
}
