import { Component, OnInit, HostBinding,
    trigger, transition, animate,
    style, state } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { SpotifyApiService }  from 'SERVICES/spotify-api.service';
import { Artist }  from 'MODELS/artist';

@Component({
    selector: 'artist',
    template: require( 'TEMPLATES/artist.component.html' ),
})
export class ArtistComponent {

    artist: Artist = new Artist();

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private spotifyApiService: SpotifyApiService) {}

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            
            this.spotifyApiService.getArtist( id ).then( response => {
                if(response.error && response.error.status == 400) return this.router.navigateByUrl('404');

                this.artist =  new Artist( response );

                this.spotifyApiService.getAlbums( id ).then( response => {
                   this.artist.setAlbums( response );
                });
            });
        });
    }
}