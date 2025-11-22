import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Song } from './models/song';
import { Raw } from './raw/raw';
import { HttpClient, HttpClientModule, HttpErrorResponse, provideHttpClient, withInterceptors } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MoreFilter } from './more-filter/more-filter';
import { SongListComponent } from './song-list-component/song-list-component';
import { RouterModule } from '@angular/router';
import { addSong } from './models/addSong';
import { AddSongs } from './add-songs/add-songs.component';

@NgModule({
  declarations: [
    App,
    Raw,
    MoreFilter,
    SongListComponent,
    AddSongs
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //HttpClientModule,
    FormsModule,
    RouterModule
  ],
  
  providers: [provideHttpClient()],
  bootstrap: [App]
})
export class AppModule { }
