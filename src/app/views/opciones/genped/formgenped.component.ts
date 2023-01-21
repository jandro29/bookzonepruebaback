import { Component, OnInit } from '@angular/core';
import { Genped } from './genped';
import { ActivatedRoute, Router } from '@angular/router';
import { GenpedService } from './genped.service';

@Component({
  selector: 'app-formgenped',
  templateUrl: './formgenped.component.html',
  styleUrls: ['./formgenped.component.css']
})
export class FormgenpedComponent implements OnInit {
  titulo:string="Registro de Pedido"
  genped:Genped = new Genped();


  constructor(private genpedService:GenpedService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let idventas=e['idventas'];
        if (idventas){
          this.genpedService.get(idventas).subscribe(
            es=>this.genped=es
          )
        }
      }
    )
  }

  create():void{
    console.log(this.genped);
    this.genpedService.create(this.genped).subscribe(
      res=>this.router.navigate(['/pedido'])
    );
  }

}
