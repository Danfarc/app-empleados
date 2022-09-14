import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../Servicios/empleados.service';
import { HomeComponentComponent } from '../home-component/home-component.component';
import { ServicioEmpleadosService } from '../Servicios/servicio-empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit {

  constructor(private router:Router,private miServicio: ServicioEmpleadosService, private empleadoService:EmpleadosService) { }

  ngOnInit(): void {
    this.empleados = this.empleadoService.empleados;
  }

  /*
  volverhome(){
    this.router.navigate([''])
  }
  */

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  empleados:Empleado[]=[];

  agregarEmpleado(){

    let miEmpleado = new Empleado(this.cuadroNombre,this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    this.empleadoService.agregarEmpleadoServico(miEmpleado);

    this.router.navigate([''])
  }

}
