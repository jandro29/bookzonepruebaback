import { Component, ViewChild} from '@angular/core';
import { Prodcuto } from './prodcuto';
import { ProductoService } from './producto.service';



@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  producto!:Prodcuto[];

  constructor( private productoService:ProductoService) { }


  ngOnInit(): void {
    this.productoService.getAll().subscribe(
      e=>this.producto=e
    );
  }

}
