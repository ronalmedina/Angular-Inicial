import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaAlumnosComponent } from "./components/tabla-alumnos/tabla-alumnos.component";
import { TablaCursosComponent } from "./components/tabla-cursos/tabla-cursos.component";
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TablaAlumnosComponent, TablaCursosComponent], // Añade CommonModule aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrige styleUrl a styleUrls
})
export class AppComponent {
  cursos: boolean = false;

  handleCambio() {
    this.cursos = !this.cursos;
  }
}
