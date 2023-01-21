import { Component, OnInit } from '@angular/core';
import { Usuarios } from './usuarios';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrls: ['./form-usuarios.component.css']
})
export class FormUsuariosComponent implements OnInit {

  usuarios:Usuarios = new Usuarios();
  titulo:string ="Registro Usuario"
  constructor(private usuariosSevice:UsuariosService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }

 cargar():void{
  this.activatedRoute.params.subscribe(
  e=>{
    let idpro=e['idpro'];
    if(idpro){
      this.usuariosSevice.get(idpro).subscribe(
        es=>this.usuarios=es
      );
    }
  }
  )
 }

  create():void{
    console.log(this.usuarios);
    this.usuariosSevice.create(this.usuarios).subscribe(
      res=>this.router.navigate(['/usuario'])
    );
  }

}
