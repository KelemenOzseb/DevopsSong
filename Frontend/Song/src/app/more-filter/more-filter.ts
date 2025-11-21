import { Component, OnInit } from '@angular/core';
import { dataService } from '../services/data';
import { Song } from '../models/song';
import { filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-more-filter',
  standalone: false,
  templateUrl: './more-filter.html',
  styleUrl: './more-filter.sass',
})
export class MoreFilter implements OnInit {
  songs: Song[] = [];

  constructor(private dataService: dataService) { }

  ngOnInit(): void {
    this.dataService.getSongs();
    this.dataService.getSongs();
    this.dataService.songs$.subscribe(songs => {
      if (songs) {
        this.songs = songs;
      }
    });
  }

  getAverageLength$() {
      return this.dataService.songs$.pipe(
      filter(songs => !!songs && songs.length > 0),
        map(songs => songs!.map(s => s.length)),      
        map(lengths => lengths.reduce((a, b) => a + b, 0) / lengths.length)
    )  
  } 

  getTitles$() {
    return this.dataService.songs$.pipe(
      filter(songs => !!songs && songs?.length > 0),
      map(songs => songs!.map(s => s.title))
    )
  }

  getRandomSong$() {
    return this.dataService.songs$.pipe(
      filter(songs => !!songs && songs.length > 0),
      map(songs => {
        return songs![this.getRandomInt(0, songs!.length - 1)];
      })
    )
  }

  getFirstSong$() {
    return this.dataService.songs$.pipe(
      filter(songs => !!songs && songs.length > 0),
      map(songs => songs![0])
    )
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
