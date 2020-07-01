import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config/keys';
import { PlacesController } from './places/places.controller';
import { PlacesModule } from './places/places.module';
import { Place } from './places/entities/place.entity';

@Module({
  imports: [
    PlacesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'seego.chuliikx9fyq.eu-central-1.rds.amazonaws.com',
      port: 5432,
      username: 'postgres',
      password: '123123123',
      database: 'postgres',
      entities: [Place],
      synchronize: true,
    }),
  ],
  controllers: [AppController, PlacesController],
  providers: [AppService],
})
export class AppModule {}
