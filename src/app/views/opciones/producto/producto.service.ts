import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Prodcuto } from './prodcuto';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private url:string="http://localhost:8080/api/productos";

  constructor( private http:HttpClient) { }

   //obtener todos los generar pedidos

   getAll():Observable<Prodcuto[]>{
    return this.http.get<Prodcuto[]>(this.url);
  }

  //crear generar pedidos
  create(prodcuto:Prodcuto):Observable<Prodcuto>{
    return this.http.post<Prodcuto>(this.url, prodcuto);
  }

  //obtener un generar pedidos
  get(idprod:number):Observable<Prodcuto>{
    return this.http.get<Prodcuto>(this.url+'/'+idprod);
  }

  //actualizar generar pedidos

  update(prodcuto:Prodcuto):Observable<Prodcuto>{
    return this.http.put<Prodcuto>(this.url, prodcuto);
  }

  //eliminar generar pedidos

  delete(idprod:number):Observable<Prodcuto[]>{
    return this.http.delete<Prodcuto[]>(this.url+'/'+idprod);
  }
}
