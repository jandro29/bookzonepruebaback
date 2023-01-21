import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Usuarios } from './usuarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url:string="http://localhost:8080/api/proveedores";

  constructor( private http:HttpClient) { }

   //obtener todos los generar pedidos

   getAll():Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(this.url);
  }

  //crear generar pedidos
  create(usuarios:Usuarios):Observable<Usuarios>{
    return this.http.post<Usuarios>(this.url, usuarios);
  }

  //obtener un generar pedidos
  get(idpro:number):Observable<Usuarios>{
    return this.http.get<Usuarios>(this.url+'/'+idpro);
  }

  //actualizar generar pedidos

  update(usuarios:Usuarios):Observable<Usuarios>{
    return this.http.put<Usuarios>(this.url, usuarios);
  }

  //eliminar generar pedidos

  delete(idpro:number):Observable<Usuarios[]>{
    return this.http.delete<Usuarios[]>(this.url+'/'+idpro);
  }
}
