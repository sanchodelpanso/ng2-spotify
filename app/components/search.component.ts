import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { SpotifyApiService } from 'SERVICES/spotify-api.service';

import { Artist }  from 'MODELS/artist';
import { Album }  from 'MODELS/album';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector: 'search-artist',
    template: require('TEMPLATES/search.component.html'),
    providers: [ SpotifyApiService ],
    styles: [
        require( './search.component.scss' ),
    ]
})
export class SearchComponent extends OnInit {
    private type: string;
    private search = new FormControl();
    private items: any[];

    constructor(
        private route: ActivatedRoute,
        private spotifyApiService: SpotifyApiService) {

        super();

        this.route.params.forEach((params: Params) => {
            this.type = params['type'];

            if(this.search.value)
                this.proccedSearch( this.search.value );
        });
    }

    ngOnInit() {
        this.search.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe(search => this.proccedSearch( search ));
    }
    
    initModel( data:any[] ) {
        return data = data.map( item => this.type == 'artist'?new Artist( item ):new Album( item ));
    }

    proccedSearch(search: string) {
        return this.spotifyApiService.search(search, this.type)
            .subscribe(items => this.items = this.initModel( items ));
    }
}
