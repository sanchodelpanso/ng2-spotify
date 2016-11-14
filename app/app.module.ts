import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { HttpModule }           from '@angular/http';
import { ReactiveFormsModule }  from '@angular/forms';

import { AppRoutingModule }     from './app.routing';

import { AppComponent }         from "COMPONENTS/app.component";
import { SearchComponent }      from 'COMPONENTS/search.component';
import { GridComponent }        from 'COMPONENTS/grid.component';
import { ArtistComponent }      from 'COMPONENTS/artist.component';
import { AlbumComponent }       from 'COMPONENTS/album.component';
import { TrackItemComponent }   from 'COMPONENTS/track-item.component.ts';


import { SpotifyApiService }    from 'SERVICES/spotify-api.service';


@NgModule({
    imports:        [ BrowserModule, AppRoutingModule, HttpModule, ReactiveFormsModule ],
    declarations:   [
                        AppComponent,
                        SearchComponent,
                        GridComponent,
                        ArtistComponent,
                        AlbumComponent,
                        TrackItemComponent
                    ],
    providers:      [ SpotifyApiService ],
    bootstrap:      [ AppComponent ]
})
export class AppModule { }