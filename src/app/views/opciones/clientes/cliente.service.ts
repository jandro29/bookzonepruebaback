import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url:string="/*urldelspring*/";

  constructor(private http:HttpClient) { }

  //obtener todos los clientes

  getAll():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url);
  }

  //crear cliente
  create(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url, cliente);
  }

  //obtener un cliente
  get(id:number):Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url+'/'+id);
  }

  //actualizar cliente

  update(cliente:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(this.url, cliente);
  }

  //eliminar cliente

  delete(id:number):Observable<Cliente[]>{
    return this.http.delete<Cliente[]>(this.url+'/'+id);
  }
}
