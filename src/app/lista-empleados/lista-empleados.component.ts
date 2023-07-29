import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit{
  
  empleados: Empleado[];

  constructor(private empleadoServicio: EmpleadoService, 
    private router: Router) { }

  ngOnInit(): void{
    this.obtenerEmpleados();
  }

  eliminarEmpleado(id:number){
    this.empleadoServicio.eliminarEmpleado(id).subscribe(
      dato => { 
        console.log(dato);
        this.obtenerEmpleados();
      }      
    )
  }

  actualizarEmpleado(id:number){
    this.router.navigate(['actualizar-empleado',id]);
  }

  detallesEmpleado(id:number){
    this.router.navigate(['detalle-empleado',id]);
  }

  private obtenerEmpleados(){
    this.empleadoServicio.obtenerListaDeEmpleados().subscribe(
      dato =>{
        this.empleados = dato;
      }
    );
  }

}
