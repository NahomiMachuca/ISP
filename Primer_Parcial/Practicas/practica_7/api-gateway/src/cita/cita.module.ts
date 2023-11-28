import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { UserController } from './cita.controller';
import { CitaService } from './cita.service';

@Module({
  imports: [ProxyModule],
  controllers: [UserController],

})
export class CitaModule {}
