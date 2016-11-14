import {Basic} from 'MODELS/basic';
import {Album} from 'MODELS/album';

export class Artist extends Basic {
    albums: Album[];

    constructor( data: any = { id: null, name: null, type: null, images: null, albums: [] } ) {
        super( data );
    }

    setAlbums( data: Object[] ) {
        this.albums = data.map(item => new Album( item ));
    }
}
