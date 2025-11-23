import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Song} from '../models/song';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { addSong } from '../models/addSong';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class dataService {
  private songs = new BehaviorSubject<Song[] | null>(null);
  songs$ = this.songs.asObservable();

  constructor(private http: HttpClient){
    this.http.get<Song[]>(environment.backendUrl).subscribe(data => this.songs.next(data))
  }

  getSongs(): void {
   this.http.get<Song[]>(environment.backendUrl).subscribe({
    next: (data) => {
      this.songs.next(data)
    },
    error: (err: any) => {
      console.error('Error fetching songs:', err);
    }
  });}

  addSong(addSong: addSong): void{
    this.http.post<Song>(environment.backendUrl, addSong).subscribe({
    next: () => {
      this.getSongs()
      console.log("Song successfully added!")
    },
    error: (err) => console.error("Error adding song:", err)
  })
  }

  deleteSong(id: string): void{
    this.http.delete(`${environment.backendUrl}/${id}` ).subscribe({
       next: () => {
      this.getSongs()
      console.log("Song successfully deleted!")
    },
    error: (err) => console.error("Error delete song:", err)
  })
  }
  
}
