import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Resenha } from './resenha/resenha';
import { Tropa } from './tropa/tropa';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Resenha,Tropa],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('rotas');
}
