import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectId } from 'mongodb';
import { MongoRepository } from 'typeorm';
import { CreateClientDTO } from './dto/client.dto';
import { Client } from './entities/clients.entity';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client) 
    private clientRepository: MongoRepository<Client>
  ) {}

  async createClient(@Body() client: CreateClientDTO) {
    return await this.clientRepository.save(client);
  }

  async getClient(clientId: string): Promise<Client> {
    return await this.clientRepository.findOneBy({
      '_id': new ObjectId(clientId)
    });
  }

  async getAllClients(): Promise<Client[]> {
    return await this.clientRepository.find();
  }

  async updateClient(clientId: string, client: CreateClientDTO): Promise<any> {
    return await this.clientRepository.updateOne(
      { '_id': new ObjectId(clientId) }, 
      {
        $set: client, 
      },
      { upsert: true }
    );
  }

  async deleteClient(clientId: string,): Promise<any> {
    return await this.clientRepository.findOneAndDelete(
      { '_id': new ObjectId(clientId) }
    );
  }
}
