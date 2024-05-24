import { CategoriaService } from './../../services/categoria.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent implements OnInit {

  constructor (private CategoriaService : CategoriaService) {}

  listaCategorias : any;

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias(): void {
    this.CategoriaService.getCategorias().subscribe({
      next: (response) => {
        this.listaCategorias = response;
        console.log(response);
      },
      error: (error) => console.log(error),
    })
  }
}
