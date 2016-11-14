import { Component } from '@angular/core';

@Component({
    selector: 'spotify-test-app',
    template: require( 'TEMPLATES/app.component.html' ),
    styles: [
        require( './app.component.scss' ),
    ]
})
export class AppComponent {
}
