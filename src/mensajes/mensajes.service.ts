import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMensajeDto } from './dto/create-mensaje-dto';
import { Mensajes } from './entities/mensaje.entity';

@Injectable()
export class MensajesService {

    constructor(
        @InjectRepository(Mensajes)
        private mensajeRepository: Repository<Mensajes>,
      ) {}

     async getAll():Promise<Mensajes[]>{

return await this.mensajeRepository.find();

      }

 async createMensaje(mensajeNuevo:CreateMensajeDto):Promise<Mensajes>{

     const nuevo = new Mensajes();
       nuevo.mensaje = mensajeNuevo.mensaje;
            nuevo.nick = mensajeNuevo.nick;

            return this.mensajeRepository.save(nuevo)

    }
async updateMnesaje(idMensaje : number, mensajeActualizar: CreateMensajeDto):Promise<Mensajes>{

const mensajeUpdate = await this.mensajeRepository.findOne(idMensaje);
mensajeUpdate.nick= mensajeActualizar.nick;
mensajeUpdate.mensaje= mensajeActualizar.mensaje;

return this.mensajeRepository.save(mensajeUpdate)

}

async deleteMensaje(idMensaje:number): Promise<any>{

return await this.mensajeRepository.delete(idMensaje);

}

}  


