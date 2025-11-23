import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Song } from '../models/song';
import { dataService } from '../services/data';

@Component({
  selector: 'app-song-list-component',
  standalone: false,
  templateUrl: './song-list-component.html',
  styleUrl: './song-list-component.sass',
})
export class SongListComponent implements OnInit{
  
  songs : Song[] = []

  constructor(private dataService: dataService) {}

  ngOnInit(): void {
    this.dataService.songs$.subscribe(data => {
      if(data)
      {
        this.songs = data
      }
    })
  }

  deleteSong(id: string):void {
    this.dataService.deleteSong(id)
  }
}
