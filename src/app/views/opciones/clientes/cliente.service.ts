import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url:string="http://localhost:9898/api/clientes";

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
  get(idcli:number):Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url+'/'+idcli);
  }

  //actualizar cliente

  update(cliente:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(this.url, cliente);
  }

  //eliminar cliente

  delete(idcli:number):Observable<Cliente[]>{
    return this.http.delete<Cliente[]>(this.url+'/'+idcli);
  }
}
