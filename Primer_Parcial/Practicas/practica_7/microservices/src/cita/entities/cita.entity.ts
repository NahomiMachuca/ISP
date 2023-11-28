import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';



@Schema()
export class Cita {

  @Prop({ required: true })
  id_veterinario: string;


  @Prop({ required: true })
  id_cliente: string;


  @Prop({ required: true })
  fecha_programada: string;


  @Prop({ required: true })
  active: boolean;
  default = true

}

export const CitaSchema = SchemaFactory.createForClass(Cita);

export type CitaDocument = Cita & Document;
export const CitaModel = mongoose.model<CitaDocument>(
  'citas',
  CitaSchema,
  //
);
