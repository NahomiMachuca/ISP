
import { CreateCitaDto } from './create-cita.dto';
import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';



export class UpdateCitaDto extends PartialType(CreateCitaDto) {
  
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  fecha_programada?: string;
}
