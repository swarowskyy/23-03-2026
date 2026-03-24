import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Resenha } from './resenha/resenha';
import { Tropa } from './tropa/tropa';
import { Galera } from './galera/galera';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Resenha,Tropa,Galera, RouterLink,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('rotas');
}
