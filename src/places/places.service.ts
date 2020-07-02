import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Place } from './entities/place.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePlaceDto } from './dto/create-place.dto';

@Injectable()
export class PlacesService {
  constructor(
    @InjectRepository(Place)
    private place: Repository<Place>,
  ) {}

  findAll(): Promise<Place[]> {
    return this.place.find();
  }

  findOne(id: string): Promise<Place> {
    return this.place.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.place.delete(id);
  }
}
