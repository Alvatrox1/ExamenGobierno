import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario/usuario';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario : Usuario;
  

  constructor( private route : ActivatedRoute, private router : Router ) { 
    this.usuario = new Usuario(0, '', '', '', false);
  }

  ngOnInit(): void {
   
  }

  onSubmit() {
    console.log(this.usuario);
    this.redireccion();
  }

  redireccion() {
    this.router.navigate(['/menu-principal']);
  }

}
