import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Response } from 'express';
import { MongoRepository } from 'typeorm';

import { CreateClientDTO } from './dto/client.dto';
import { Client } from './entities/clients.entity';

@Controller('clients')
export class ClientsController {
  constructor(
    @InjectRepository(Client) 
    private clientRepository: MongoRepository<Client>
  ) {}

  @Post('/create')
  async createClient(@Res() res: Response, @Body() createClientfDTO: CreateClientDTO) {
    console.log(createClientfDTO);
    await this.clientRepository.save(createClientfDTO);

    res.status(HttpStatus.OK).json({
      message: 'received'
    });
  }
}
