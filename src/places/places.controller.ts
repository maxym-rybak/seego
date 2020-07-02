import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreatePlaceDto } from './dto/create-place.dto';
import { PlacesService } from './places.service';
import { Place } from './entities/place.entity';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Get()
  async findAll(): Promise<Place[]> {
    return this.placesService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<Place> {
    return this.placesService.findOne(id);
  }
}
