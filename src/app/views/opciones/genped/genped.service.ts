import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Genped } from './genped';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenpedService {
  private url:string="http://localhost:8080/api/detallevents";

  constructor(private http:HttpClient) { }

  //obtener todos los generar pedidos

  getAll():Observable<Genped[]>{
    return this.http.get<Genped[]>(this.url);
  }

  //crear generar pedidos
  create(genped:Genped):Observable<Genped>{
    return this.http.post<Genped>(this.url, genped);
  }

  //obtener un generar pedidos
  get(idventas:number):Observable<Genped>{
    return this.http.get<Genped>(this.url+'/'+idventas);
  }

  //actualizar generar pedidos

  update(genped:Genped):Observable<Genped>{
    return this.http.put<Genped>(this.url, genped);
  }

  //eliminar generar pedidos

  delete(idventas:number):Observable<Genped[]>{
    return this.http.delete<Genped[]>(this.url+'/'+idventas);
  }
}
