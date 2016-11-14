import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent }      from 'COMPONENTS/search.component.ts';
import { ArtistComponent }      from 'COMPONENTS/artist.component';
import { AlbumComponent }       from 'COMPONENTS/album.component';

const routes: Routes = [
    { path: '',  redirectTo: 'search-type/artist', pathMatch: 'full' },
    { path: 'search-type/:type', component: SearchComponent },
    { path: 'artist/:id', component: ArtistComponent },
    { path: 'album/:id', component: AlbumComponent },

    { path: '**', redirectTo: 'search-type/artist', pathMatch: 'full' },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}