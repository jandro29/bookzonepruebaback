import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';


@Component({
  selector: 'app-from-cliente',
  templateUrl: './from-cliente.component.html',
  styleUrls: ['./from-cliente.component.css']
})
export class FromClienteComponent implements OnInit {

  cliente:Cliente = new Cliente;
  titulo:string="Registro de Cliente";

  constructor(private clienteService:ClienteService, private router:Router, private actiatedRoute:ActivatedRoute) { }

  ngOnInit(): void {



    //this.cargar()

  }/*
  cargar():void{


    this.actiatedRoute.params.subscribe(
      e=>{
        let idcli=e['idcli'];
        if(idcli){
          this.clienteService.get(idcli).subscribe(
            es=>this.cliente =es
          );
        }
      }
    );
  }
*/
  create():void{
    console.log(this.cliente);
    this.clienteService.create(this.cliente).subscribe(
      res=>this.router.navigate(['/cliente'])

    );
  }

}
