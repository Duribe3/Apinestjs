import { Controller, Post,Body,Get,Put, Delete, Res, HttpStatus, Param } from '@nestjs/common';
import { response } from 'express';
import { CreateMensajeDto } from './dto/create-mensaje-dto';
import { MensajesService } from './mensajes.service';

@Controller('mensajes')
export class MensajesController {
    constructor(private mensajesServices:MensajesService){


    }

@Post()
create (@Body() createMensajeDto: CreateMensajeDto, @Res() Response){
 this.mensajesServices.createMensaje(createMensajeDto).then(mensaje => {
     Response.status(HttpStatus.CREATED).json(mensaje);
 }).catch( ()=> {
     response.status(HttpStatus.FORBIDDEN).json({mensaje:'Error en la creacion del mensaje'})
 });


}

@Get()
getAll(@Res()Response){
this.mensajesServices.getAll().then(mensajesList=>{ 
Response.status(HttpStatus.OK). json(mensajesList)

}).catch(()=>{ 
    response.status(HttpStatus.FORBIDDEN).json({mensaje:'Error en la obtencion del mensajes'})
}); 
    
}

@Put(': id')
update(@Body() updateMensajeDto : CreateMensajeDto,@Res()Response,@Param('id') idMensaje){
this.mensajesServices.updateMnesaje(idMensaje,updateMensajeDto).then( mensaje =>{

    Response.status(HttpStatus.OK).json(mensaje);
}).catch(()=>{

    Response.status(HttpStatus.FORBIDDEN).json ({mensaje:'Error en la edicion del mensaje'})
})
    

}



@Delete(':id')
delete(@Res()Response,@Param('id') idMensaje){

this.mensajesServices.deleteMensaje(idMensaje).then(res =>{

    Response.status(HttpStatus.OK).json(res);


}).catch(()=>{

    Response.status(HttpStatus.FORBIDDEN).json ({mensaje:'Error en la eliminacion del Mensaje'})
});

}

}
