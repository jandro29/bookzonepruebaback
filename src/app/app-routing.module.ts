import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './views/index/index.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { ProductoComponent } from './views/opciones/producto/producto.component';
import { ClientesComponent } from './views/opciones/clientes/clientes.component';
import { UsuariosComponent } from './views/opciones/usuarios/usuarios.component';
import { RepotventComponent } from './views/opciones/repotvent/repotvent.component';
import { GenpedComponent } from './views/opciones/genped/genped.component';
import { FromClienteComponent } from './views/opciones/clientes/from-cliente.component';
import { FormgenpedComponent } from './views/opciones/genped/formgenped.component';
import { FormProductoComponent } from './views/opciones/producto/form-producto.component';
import { FormReportventaComponent } from './views/opciones/repotvent/form-reportventa.component';
import { FormUsuariosComponent } from './views/opciones/usuarios/form-usuarios.component';

const routes: Routes = [

  { path: 'index', redirectTo: '#', pathMatch: 'full' },
  { path: 'index', component: IndexComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'producto', component: ProductoComponent},
  { path: 'cliente', component: ClientesComponent},
  { path: 'usuario', component: UsuariosComponent},
  { path: 'venta', component: RepotventComponent},
  { path: 'pedido', component: GenpedComponent},

  //formulario cliente
  { path: 'cliente/form', component: FromClienteComponent},
  { path: 'cliente/form/:idcli', component: FromClienteComponent},

  //formulario generar pedido
  { path: 'generarpedido/form', component: FormgenpedComponent},
  { path: 'generarpedido/form/:idventas', component: FormgenpedComponent},

  //formulario producto
  { path: 'producto/form', component: FormProductoComponent},
  { path: 'producto/form/:idprod', component: FormProductoComponent},

 //formulario report ventas
 { path: 'reportvent/form', component: FormReportventaComponent},
 { path: 'reportvent/form/:idvent', component: FormReportventaComponent},

 //formulario usuarios
 { path: 'usuarios/form', component: FormUsuariosComponent},
 { path: 'usuarios/form/:idpro', component: FormUsuariosComponent},


  { path: '**', component: IndexComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppRoutingModule { }
