import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SpotifyApiService {
    static validTypes = ["artist", "album"];

    static searchEvent: EventEmitter<any> = new EventEmitter();


    constructor( private http: Http ) {}

    search( search: string, type: string ) {
        if(SpotifyApiService.validTypes.indexOf( type ) < 0) throw new Error( 'Invalid type' );
        
        return this.http.get( `https://api.spotify.com/v1/search?query=*${search}*&offset=0&limit=20&market=US&type=${type}` )
            .map(response => response.json()[`${type}s`].items);

    }

    getArtist( id: string ) {
        return this.http.get(`https://api.spotify.com/v1/artists/${id}`).map( res => res.json() ).toPromise();
    }

    getAlbums( id: string ) {
        return this.http.get(`https://api.spotify.com/v1/artists/${id}/albums?album_type=album&market=US`).map( res => res.json().items ).toPromise();
    }

    getAlbum( id: string ) {
        return this.http.get(`https://api.spotify.com/v1/albums/${id}`).map( res => res.json() ).toPromise();
    }

    searchHandler(callback: (response: any[]) => void ) {
        SpotifyApiService.searchEvent.subscribe(callback);
    }

}