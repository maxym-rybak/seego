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

@Controller('places')
export class PlacesController {}
