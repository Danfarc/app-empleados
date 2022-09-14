import { Injectable } from "@angular/core";
import { Empleado } from "../empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";
import { DataServices } from "./data.services";

@Injectable()

export class EmpleadosService{

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataService: DataServices){}

  setEmpleados(misEmpleados:Empleado[]){
    this.empleados = misEmpleados;
  }


  obtenerEmpleados(){
    return this.dataService.cargarEmpleados();
  }

  /*
  empleados:Empleado[]=[
    new Empleado("Juan","Diaz","Presitente",1200),
    new Empleado("Daniel","Diaz","TI",500),
    new Empleado("Melissa","Diaz","Administrativo",1000),
    new Empleado("Johana","Diaz","Gestion Humana",800),
  ];
  */

  empleados:Empleado[] =[];

  agregarEmpleadoServico(empleado:Empleado){
    this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar : " +"\n"+ empleado.nombre);
    this.empleados.push(empleado);
    this.dataService.guardarEmpleados(this.empleados);
  }

  encontrarEmpleado(indice:number){
    let empleado:Empleado = this.empleados[indice];
    return empleado;
  }

  actualizarEmpleado(indice:number, empleado:Empleado){

    this.dataService.actualizarEmpleado(indice,empleado);

    let empleadoModificado = this.empleados[indice];
    empleadoModificado.nombre = empleado.nombre;
    empleadoModificado.apellidos = empleado.apellidos;
    empleadoModificado.cargo = empleado.cargo;
    empleadoModificado.salario = empleado.salario;

  }

  eliminarEmpleado(indice:number){
    this.empleados.splice(indice,1);
    this.dataService.eliminarEmpleado(indice);
    if(this.empleados!=null){
      this.dataService.guardarEmpleados(this.empleados);
    }

  }

}
