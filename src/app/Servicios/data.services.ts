import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from '../empleado.model';
import { LoginService } from './login.service';

@Injectable()
export class DataServices{

    constructor(private httpClient: HttpClient, private loginService:LoginService){}

    guardarEmpleados(empleados:Empleado[]){

      /*
      this.httpClient.post('https://mis-clientes-5ec15-default-rtdb.firebaseio.com/datos.json',empleados).subscribe(
        response=>console.log("Se han guardado los empleados: " + response),
        error => console.log("Error: "+ error),
      );
      */
      const token = this.loginService.getIdToken();
      this.httpClient.put('https://mis-clientes-5ec15-default-rtdb.firebaseio.com/datos.json?auth='+token,empleados).subscribe(
        response=>console.log("Se han guardado los empleados: " + response),
        error => console.log("Error: "+ error),
      );

    }

    cargarEmpleados(){
      const token = this.loginService.getIdToken();
      return this.httpClient.get('https://mis-clientes-5ec15-default-rtdb.firebaseio.com/datos.json?auth='+token)
    }


    actualizarEmpleado(indice:number, empleado:Empleado){


      const token = this.loginService.getIdToken();
      let url= 'https://mis-clientes-5ec15-default-rtdb.firebaseio.com/datos/' +indice+'.json?auth='+token;

      this.httpClient.put(url,empleado).subscribe(
        response=>console.log("Se ha modificado el empleado: " + response),
        error => console.log("Error: "+ error),
      );

    }

    eliminarEmpleado(indice:number){

      const token = this.loginService.getIdToken();

      let url= 'https://mis-clientes-5ec15-default-rtdb.firebaseio.com/datos/' +indice+'.json?auth='+token;

      this.httpClient.delete(url).subscribe(
        response=>console.log("Se ha eliminado el empleado: " + response),
        error => console.log("Error: "+ error),
      );

    }

}
