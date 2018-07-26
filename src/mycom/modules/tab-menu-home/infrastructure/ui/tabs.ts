import { Component } from '@angular/core';

import { HomePage } from './tab-pages/home/home';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1Root = HomePage;

    constructor() {

    }
}


