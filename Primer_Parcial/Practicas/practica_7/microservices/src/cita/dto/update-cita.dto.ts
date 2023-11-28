import { PartialType } from '@nestjs/mapped-types';
import { CreateCitaDto } from './create-cita.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';



export class UpdateCitaDto extends PartialType(CreateCitaDto) {
 
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  fecha_cita?: string;
}
