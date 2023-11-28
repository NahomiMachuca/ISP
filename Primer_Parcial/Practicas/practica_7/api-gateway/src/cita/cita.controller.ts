import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CitaMSG } from '../common/constants';
import { Observable } from 'rxjs';
import { CitaDTO } from './dto/cita.dto';
import { ClientProxyVeterinaria } from '../common/proxy/client-proxy';
import { ICita } from './entities/cita.entity';

@Controller('api/cita')
export class UserController {
  constructor(private readonly clientProxy: ClientProxyVeterinaria) {}
  private _clientProxyUser = this.clientProxy.clientProxyCitas();

  @Post()
  create(@Body() userDTO: CitaDTO): Observable<ICita> {
    return this._clientProxyUser.send(CitaMSG.CREATE, userDTO);
  }

  @Get()
  findAll(): Observable<ICita[]> {
    return this._clientProxyUser.send(CitaMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<ICita> {
    return this._clientProxyUser.send(CitaMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() userDTO: CitaDTO,
  ): Observable<ICita> {
    return this._clientProxyUser.send(CitaMSG.UPDATE, { id, userDTO });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyUser.send(CitaMSG.DELETE, id);
  }
}
