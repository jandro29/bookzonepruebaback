import { Component, OnInit } from '@angular/core';
import { Reportventa } from './reportventa';
import { ReportventaService } from './reportventa.service';

@Component({
  selector: 'app-repotvent',
  templateUrl: './repotvent.component.html',
  styleUrls: ['./repotvent.component.css']
})
export class RepotventComponent implements OnInit {

  reportvent!:Reportventa[];

  constructor(private reportventService:ReportventaService) { }

  ngOnInit(): void {
    this.reportventService.getAll().subscribe(
      e=>this.reportvent=e
    );
  }

}
