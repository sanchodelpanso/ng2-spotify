import { Component, Input, Output, EventEmitter, AfterContentInit } from '@angular/core';

@Component({
    selector: 'track-item',
    template: require( 'TEMPLATES/track-item.component.html' ),
    styles: [
        require( './track-item.component.scss' ),
    ]
})
export class TrackItemComponent extends AfterContentInit {

    @Input() track: any;
    @Input() anyPlay: EventEmitter<any>;
    @Output() play: EventEmitter<any> = new EventEmitter();

    isActive = false;
    progress = 0;
    audio: any;

    ngAfterContentInit() {
        this.anyPlay.subscribe((trackId: string) => {
            if(trackId == this.track.id) return;

            this.isActive = false;
            this.audio.pause();
        });

        this.audio = new Audio(this.track.preview_url);
        this.audio.addEventListener('timeupdate', () => {
            this.progress = this.audio.currentTime * 100/this.audio.duration;
        });
        this.audio.addEventListener('ended', () => {
            this.isActive = false;
        });
    }

    toogleState() {
        this.isActive = !this.isActive;

        if(this.isActive) {
            this.play.emit( this.track.id );
            this.audio.play();
            return;
        }

        this.audio.pause();
    }
}