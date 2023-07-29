import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})

export class ActualizarEmpleadoComponent implements OnInit {

  id: number;

  empleado: Empleado;

  constructor(
    private empleadoServicio: EmpleadoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.empleado = new Empleado();

    this.id = this.route.snapshot.params['id'];

    this.empleadoServicio.obtenerEmpleado(this.id)
    .subscribe(dato => {
      console.log(dato);
      this.empleado = dato;
    })

  }

  actualizarEmpleado(): void{
    this.empleadoServicio.actualizarEmpleado(this.id, this.empleado)
    .subscribe(dato => {
      console.log(dato);
      this.irALaListaDeEmpleados();
    });
  }

  irALaListaDeEmpleados() {
    this.router.navigate(['/empleados']);
  }

  onSubmit() {
    this. actualizarEmpleado();
  }

  
}
