import { Component, OnInit } from '@angular/core';
import { Song } from '../models/song';
import { Data } from '@angular/router';
import { dataService } from '../services/data';

@Component({
  selector: 'app-raw',
  standalone: false,
  templateUrl: './raw.html',
  styleUrl: './raw.sass',
})
export class Raw implements OnInit{
  constructor(public dataService: dataService) { }

  ngOnInit(): void {
    this.dataService.getSongs();
    console.log("Oninitből");
   }
}
