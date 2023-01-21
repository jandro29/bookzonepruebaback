import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reportventa } from './reportventa';
import { ReportventaService } from './reportventa.service';

@Component({
  selector: 'app-form-reportventa',
  templateUrl: './form-reportventa.component.html',
  styleUrls: ['./form-reportventa.component.css']
})
export class FormReportventaComponent implements OnInit {

  titulo:string="Registro de Pedido"
  reportventa:Reportventa = new Reportventa();


  constructor(private reportventaService:ReportventaService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }

cargar():void{
  this.activatedRoute.params.subscribe(
    e=>{
     let idvent=e['idvent'];
     if(idvent){
      this.reportventaService.get(idvent).subscribe(
        es=>this.reportventa=es
      )
     }
    }
  );
}

  create():void{
    console.log(this.reportventa);
    this.reportventaService.create(this.reportventa).subscribe(
      res=>this.router.navigate(['/venta'])
    );
  }

}
