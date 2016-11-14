export class Basic {
    id: string;
    name: string;
    type: string;
    images: any;

    constructor( data: any = { id: null, name: null, type: null, images: null } ) {
        Object.assign(this, data);

        this.images = Basic.setImages( this.images );
    }
    
    static setImages( images:any[] ) {
        let imagesUrl : {large: string, medium: string, small: string} = {large: null, medium: null, small: null};

        if(!images || !images.length)
            return imagesUrl;

        let [small, medium, large] = images;


        large = large || (medium = medium || small);
        [imagesUrl.large, imagesUrl.medium, imagesUrl.small] = [small.url, medium.url, large.url];

        return imagesUrl;
    }
}
