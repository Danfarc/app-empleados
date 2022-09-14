import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../Servicios/servicio-empleados.service';
import { EmpleadosService } from '../Servicios/empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
  empleados:Empleado[]=[];

  constructor(private miServicio: ServicioEmpleadosService, private empleadoService:EmpleadosService) { }

  ngOnInit(): void {
    //this.empleados = this.empleadoService.empleados;

      setTimeout(() => {

        this.empleadoService.obtenerEmpleados().subscribe(misEmpleados => {

          this.empleados = Object.values(misEmpleados);
          this.empleadoService.setEmpleados(this.empleados);
          console.log(misEmpleados);

        });
      },200);



  }

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre,this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleadoService.agregarEmpleadoServico(miEmpleado);

  }


}
