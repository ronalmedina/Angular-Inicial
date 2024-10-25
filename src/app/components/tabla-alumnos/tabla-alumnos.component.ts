import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { alumnos } from './mock';

@Component({
  selector: 'app-tabla-alumnos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.css'] // Corrige styleUrl a styleUrls
})
export class TablaAlumnosComponent implements OnInit {
  public alumnos?: any[];

  ngOnInit(): void {
    this.alumnos = alumnos;
  }
}
