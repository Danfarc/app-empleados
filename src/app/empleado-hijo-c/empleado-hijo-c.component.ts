import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../Servicios/servicio-empleados.service';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent implements OnInit {

  @Input() empleadoDeLista:Empleado;
  @Input() indice:number;

  arrayCaracteristicas = [''];

  agregarCaracteristicas(nuevaCaracteristica: string ){
    this.miServicio.muestraMensaje(nuevaCaracteristica);
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }

  constructor(private miServicio: ServicioEmpleadosService) { }


  ngOnInit(): void {
  }

}
