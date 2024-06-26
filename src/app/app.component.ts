import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CategoriaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'projetolivraria';

  ngOnInit(): void {
    initFlowbite();
  }
}
