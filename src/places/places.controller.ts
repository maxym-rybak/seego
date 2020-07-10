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
  async getOne(@Param('id') id: number): Promise<Place> {
    return this.placesService.findOne(id);
  }

  @Post()
  create(@Body() createPlaceDto: CreatePlaceDto): Promise<Place> {
    return this.placesService.create(createPlaceDto);
  }

  @Put(':id')
  async update(
    @Body() updateItemDto: CreatePlaceDto,
    @Param('id') id: number,
  ): Promise<Place> {
    return this.placesService.update(id, updateItemDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<boolean> {
    this.placesService.delete(id);
    return true;
  }
}
