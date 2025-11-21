import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Raw } from './raw/raw';
import { MoreFilter } from './more-filter/more-filter';
import { SongListComponent } from './song-list-component/song-list-component';
import { AddSongs } from './add-songs/add-songs.component';


const routes: Routes = [
  {path: '', redirectTo: 'raw', pathMatch: 'full'},
  {path: 'raw', component: Raw},
  {path: 'more-filter', component: MoreFilter},
  {path: 'song-list', component: SongListComponent},
  {path: 'add-song', component: AddSongs},
  {path: '**', redirectTo: 'raw'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
