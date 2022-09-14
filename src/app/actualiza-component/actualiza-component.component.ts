import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../Servicios/empleados.service';
import { ServicioEmpleadosService } from '../Servicios/servicio-empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {

  constructor(private router:Router,
    private miServicio: ServicioEmpleadosService,
    private empleadoService:EmpleadosService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.empleados = this.empleadoService.empleados;
    this.indice=this.route.snapshot.params['id'];
    this.accion = parseInt(this.route.snapshot.queryParams['accion']);

    let empleado:Empleado=this.empleadoService.encontrarEmpleado(this.indice);

    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellidos;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  }


  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
  indice :number;
  accion:number;

  empleados:Empleado[]=[];

  /*
  actualizaEmpleado(){

    let miEmpleado = new Empleado(this.cuadroNombre,this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    this.empleadoService.actualizarEmpleado(this.indice,miEmpleado);

    this.router.navigate([''])
  }

  eliminarEmpleado(){

    this.empleadoService.eliminarEmpleado(this.indice);

    this.router.navigate([''])
  }
  */

  actualizaEmpleado(){

    if(this.accion == 1 ){
      let miEmpleado = new Empleado(this.cuadroNombre,this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
      this.empleadoService.actualizarEmpleado(this.indice,miEmpleado);
    }else{
      this.empleadoService.eliminarEmpleado(this.indice);
    }
    this.router.navigate([''])
  }

}
