export class Empleado{
  nombre:string="";
  apellidos:string="";
  cargo:string="";
  salario:number=0;

  constructor(pNombre:string,pApellido:string,pCargo:string,pSalario:number){
    this.nombre = pNombre;
    this.apellidos = pApellido;
    this.cargo = pCargo;
    this.salario = pSalario;
  }
}
