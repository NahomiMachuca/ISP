import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CitaService } from './cita.service';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CitaMSG } from 'src/common/constants';

@Controller('cita')
export class CitaController {
  constructor(private readonly citaService: CitaService) {}

  @MessagePattern(CitaMSG.CREATE)
  create(@Payload() createCitaDto: CreateCitaDto) {
    return this.citaService.create(createCitaDto);
  }

  @MessagePattern(CitaMSG.FIND_ALL)
  findAll() {
    return this.citaService.findAll();
  }

  @MessagePattern(CitaMSG.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.citaService.findOne(id);
  }

  @MessagePattern(CitaMSG.UPDATE)
  update(
    @Payload() id: string,
    @Payload() updateCitaDto: UpdateCitaDto,
  ) {
    return this.citaService.update(id, updateCitaDto);
  }

  @MessagePattern(CitaMSG.DELETE)
  remove(@Payload() id: string) {
    return this.citaService.remove(id);
  }
}
