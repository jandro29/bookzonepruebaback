import { Component, OnInit } from '@angular/core';
import { Genped } from './genped';
import { GenpedService } from './genped.service';

@Component({
  selector: 'app-genped',
  templateUrl: './genped.component.html',
  styleUrls: ['./genped.component.css']
})
export class GenpedComponent implements OnInit {


  genped!:Genped[];


  constructor(private gendpedService:GenpedService) { }

  ngOnInit(): void {
    this.gendpedService.getAll().subscribe(
      e=>this.genped=e
    );
  }

}
