import { Module } from '@nestjs/common';
import { Db, MongoClient } from 'mongodb';

@Module({
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async (): Promise<Db> => {
        const uri = "mongodb+srv://JulioWeb:7zi0qCR2cMu7w4NR@cluster0.5oug2.mongodb.net/?retryWrites=true&w=majority";
        try {
          const client = await MongoClient.connect(uri);
          return client.db('julio');
        } catch (error) {
          throw error;
        }
      }
    }
  ],
  exports: ['DATABASE_CONNECTION']
})
export class MongodbModule {}
