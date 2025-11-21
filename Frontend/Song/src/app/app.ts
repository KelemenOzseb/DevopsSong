import { Component, EventEmitter, output, signal } from '@angular/core';
import { Song } from './models/song';
import { dataService } from './services/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.sass'
})
export class App {
  protected readonly title = signal('Song');
}
