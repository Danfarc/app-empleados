import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titulo = 'Listado empleados';

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  empleados:Empleado[]=[
    new Empleado("Juan","Diaz","Presitente",1200),
    new Empleado("Daniel","Diaz","TI",500),
    new Empleado("Melissa","Diaz","Administrativo",1000),
    new Empleado("Johana","Diaz","Gestion Humana",800),
  ];

  agregarEmpleado(){

    let miEmpleado = new Empleado(this.cuadroNombre,this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    this.empleados.push(miEmpleado);
  }


}
