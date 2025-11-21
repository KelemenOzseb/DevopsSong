import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Song} from '../models/song';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../services/config-service';
import { addSong } from '../models/addSong';


@Injectable({
  providedIn: 'root'
})
export class dataService {
  private songs = new BehaviorSubject<Song[] | null>(null);
  songs$ = this.songs.asObservable();

  constructor(private http: HttpClient, private configService: ConfigService){
    this.http.get<Song[]>(this.configService.cfg.backendUrl).subscribe(data => this.songs.next(data))
  }

  getSongs(): void {
   this.http.get<Song[]>(this.configService.cfg.backendUrl).subscribe({
    next: (data) => {
      this.songs.next(data)
    },
    error: (err: any) => {
      console.error('Error fetching songs:', err);
    }
  });}

  addSong(addSong: addSong): void{
    this.http.post<Song>(this.configService.cfg.backendUrl, addSong).subscribe({
    next: () => {
      this.getSongs()
      console.log("Song successfully added!")
    },
    error: (err) => console.error("Error adding song:", err)
  })
  }
  
}
