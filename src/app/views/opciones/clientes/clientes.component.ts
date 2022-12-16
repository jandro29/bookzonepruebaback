import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{

  clientes!: Cliente[];


constructor(private clienteService:ClienteService){}

  ngOnInit(): void {
    this.clienteService.getAll().subscribe(
      e =>this.clientes=e
    );

  }

  delete(cliente:Cliente):void{
    console.log("Hello From delete");
    this.clienteService.delete(cliente.idcli).subscribe(
      res=>this.clienteService.getAll().subscribe(
        Response=>this.clientes=Response
      )
    );
  }

}
