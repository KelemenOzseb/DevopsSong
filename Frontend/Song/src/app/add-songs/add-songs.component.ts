import { Component } from '@angular/core';
import { dataService } from '../services/data';
import { Song } from '../models/song';
import { addSong } from '../models/addSong';

@Component({
  selector: 'app-add-songs',
  standalone: false,
  templateUrl: './add-songs.component.html',
  styleUrl: './add-songs.sass',
})
export class AddSongs {

  song : addSong = new addSong("", "", 0, 0)

  constructor(private dataService:dataService) {}

  createSong(): void{
    this.dataService.addSong(this.song)
    this.song = new addSong("", "", 0, 0)
    console.log(this.song.artist)
  }
}
