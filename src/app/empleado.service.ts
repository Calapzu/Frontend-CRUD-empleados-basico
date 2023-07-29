import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado';
import { Observable } from 'rxjs';

const baseURL = "http://localhost:8080/api/v1/empleados";

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //Esta URL obtiene el listado de todos los empleados 
  //del backend
  

  constructor(private httpCliente: HttpClient) { }

  obtenerEmpleado(id:number): Observable<any>{
    return this.httpCliente.get(`${baseURL}/${id}`);
  }

  //Este metodo nos sirve para obtener los empleados
  obtenerListaDeEmpleados(): Observable<Empleado[]>{
    return this.httpCliente.get<Empleado[]>(`${baseURL}`);
  }

  //Este metodo nos sirve para registrar un empleado
  registrarEmpleado(empleado: Empleado): Observable<any>{
    return this.httpCliente.post(`${baseURL}`, empleado);
  }
  
  //Este metodo nos sirve para eliminar un empleado por id
  eliminarEmpleado(id: number): Observable<Object>{
    return this.httpCliente.delete(`${baseURL}/${id}`);
  }

  actualizarEmpleado(id: number, empleado: any): Observable<Object>{
    return this.httpCliente.put(`${baseURL}/${id}`, empleado);
  }

}
