import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongodbModule } from './mongodb/mongodb.module';

@Module({
  imports: [
    MongodbModule,
    ConfigModule.forRoot({
      envFilePath: 'development.env',
      isGlobal: true,
      cache: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
