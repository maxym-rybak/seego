import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Place } from './entities/place.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePlaceDto } from './dto/create-place.dto';

@Injectable()
export class PlacesService {
  constructor(
    @InjectRepository(Place)
    private placesRepository: Repository<Place>,
  ) {}

  findAll(): Promise<Place[]> {
    return this.placesRepository.find();
  }

  findOne(id: number): Promise<Place> {
    return this.placesRepository.findOne(id);
  }

  async create(place: CreatePlaceDto): Promise<Place> {
    const newPlace = this.placesRepository.create(place);
    return await this.placesRepository.save(newPlace);
  }

  async update(id: number, place: CreatePlaceDto): Promise<Place> {
    let placeToUpdate = await this.placesRepository.findOne(id);
    placeToUpdate = { ...placeToUpdate, ...place };
    return await this.placesRepository.save(placeToUpdate);
  }

  async delete(id: number): Promise<void> {
    await this.placesRepository.delete(id);
  }
}
