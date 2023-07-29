import { Component } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrls: ['./detalle-empleado.component.css']
})
export class DetalleEmpleadoComponent {
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

  detalleEmpleado(): void{
    this.empleadoServicio.obtenerEmpleado(this.id)
    .subscribe(dato => {
      console.log(dato);
      this.irALaListaDeEmpleados();
    });
  }

  irALaListaDeEmpleados() {
    this.router.navigate(['/empleados']);
  }

  volverInicio() {
    this. detalleEmpleado();
  }
}
