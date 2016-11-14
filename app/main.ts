// Polyfill for older browsers
import 'core-js/client/shim.min.js';
import 'zone.js/dist/zone.js';
import 'reflect-metadata/Reflect.js';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Root module
import { AppModule } from './app.module';

// shared styles
import './shared/styles/styles.scss';


if (process.env.NODE_ENV === 'production') {
    enableProdMode();
}


document.addEventListener('DOMContentLoaded', () => {
    platformBrowserDynamic().bootstrapModule(AppModule)
        .catch(error => console.error(error));
});
