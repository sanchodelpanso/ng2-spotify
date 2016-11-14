import {Basic} from 'MODELS/basic';

export class Album extends Basic {
    tracks: {items:any[]};
    
    constructor( data: any = { id: null, name: null, type: null, images: null, tracks: {items: []} } ) {
        super( data );
    }
}
