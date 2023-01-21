import { Component, ViewChild } from '@angular/core';
import { Usuarios } from './usuarios';

import { UsuariosService } from './usuarios.service';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent{

  usuarios!:Usuarios[];

  constructor(private usuariosService:UsuariosService) { }

  ngOnInit(): void {

    this.usuariosService.getAll().subscribe(
      e=>this.usuarios=e
    );
  }


}
