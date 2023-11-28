import { IsNotEmpty, IsString, MinLength } from 'class-validator';



export class CreateCitaDto {
  @IsString()

  @IsNotEmpty()
  @MinLength(1)
  id_veterinario: string;

 
  @IsString()
  @IsNotEmpty()
  id_cliente: string;

 
  @IsString()
  @IsNotEmpty()
  fecha_programada: string;
}
