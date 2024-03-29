import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prodcuto } from './prodcuto';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {
  titulo:string="Registro de Pedido"
  producto:Prodcuto = new Prodcuto();


  constructor(private productoService:ProductoService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }


  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let idprod=e['idprod'];
        if (idprod){
          this.productoService.get(idprod).subscribe(
            es=>this.producto=es
          )
        }
      }
    )
  }

  create():void{
    console.log(this.producto);
    this.productoService.create(this.producto).subscribe(
      res=>this.router.navigate(['/producto'])
    );
  }

}
