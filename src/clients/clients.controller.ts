import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { CreateClientDTO } from './dto/client.dto';

@Controller('clients')
export class ClientsController {

  @Post('/create')
  createClient(@Res() res: Response, @Body() createClientDTO: CreateClientDTO) {
    console.log(createClientDTO);
    
    res.status(HttpStatus.OK).json({
      message: 'received'
    });
  }

  // @Get('/')
  // getClients() {

  // }


}
