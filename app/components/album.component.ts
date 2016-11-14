import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { SpotifyApiService }  from 'SERVICES/spotify-api.service';
import { Album }  from 'MODELS/album';

@Component({
    selector: 'album',
    template: require( 'TEMPLATES/album.component.html' ),
    styles: [
        require( './album.component.scss' ),
    ]
})
export class AlbumComponent extends OnInit {

    album: Album = new Album();
    @Output() anyPlay: EventEmitter<any> = new EventEmitter();
    
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private spotifyApiService: SpotifyApiService) {
        super();
    }

    ngOnInit() {
        
        this.route.params.forEach((params: Params) => {
            let id = params['id'];

            this.spotifyApiService.getAlbum( id ).then( response => {
                if(response.error && response.error.status == 400) return this.router.navigateByUrl('404');

                this.album =  new Album( response );
            });
        });
    }

    onPlay( trackId: string) {
        this.anyPlay.emit( trackId );
    }
}