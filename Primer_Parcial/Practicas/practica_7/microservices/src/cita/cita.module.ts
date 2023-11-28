import { Module } from '@nestjs/common';
import { CitaService } from './cita.service';
import { CitaController } from './cita.controller';
import { CitaSchema } from './entities/cita.entity';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  controllers: [CitaController],
  providers: [CitaService],
  imports: [
    MongooseModule.forFeature([
      { name: 'citas', schema: CitaSchema }, // Registra el esquema de Citas
    ]),
  ],
  exports: [CitaService, MongooseModule],
})
export class CitaModule {}
