import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/compat/app'
import { LoginService } from './Servicios/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  titulo = 'Listado empleados';

  constructor(private loginService:LoginService){}


  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyBxMk11JLxsq07Oygx1GNZACIbIUWyxjRg",
      authDomain:"mis-clientes-5ec15.firebaseapp.com"
    });
   }

   estaLogueado(){
    return this.loginService.estaLogeado();
   }

   logout(){
    this.loginService.logout();
   }


}
