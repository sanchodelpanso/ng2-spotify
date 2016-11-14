import { Component, Input } from '@angular/core';

@Component({
    selector: 'grid',
    template: require( 'TEMPLATES/grid.component.html' ),
    styles: [
        require( './grid.component.scss' ),
    ]
})
export class GridComponent {
    @Input()
    items: any[];
}