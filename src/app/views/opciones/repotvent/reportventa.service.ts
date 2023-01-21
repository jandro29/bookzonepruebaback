import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Reportventa } from './reportventa';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReportventaService {

  private url:string="http://localhost:8080/api/ventas";

  constructor(private http:HttpClient) { }

  //obtener todos los generar pedidos

  getAll():Observable<Reportventa[]>{
    return this.http.get<Reportventa[]>(this.url);
  }

  //crear generar pedidos
  create(reportventa:Reportventa):Observable<Reportventa>{
    return this.http.post<Reportventa>(this.url, reportventa);
  }

  //obtener un generar pedidos
  get(idvent:number):Observable<Reportventa>{
    return this.http.get<Reportventa>(this.url+'/'+idvent);
  }

  //actualizar generar pedidos

  update(reportventa:Reportventa):Observable<Reportventa>{
    return this.http.put<Reportventa>(this.url, reportventa);
  }

  //eliminar generar pedidos

  delete(idvent:number):Observable<Reportventa[]>{
    return this.http.delete<Reportventa[]>(this.url+'/'+idvent);
  }
}
