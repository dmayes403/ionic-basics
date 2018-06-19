import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UsersPage } from '../users/users';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) { // <-- class provided by ionic to 
        // allow us to manage the stack of pages

    }

    onGoToUsers() {
        this.navCtrl.push(UsersPage); // This pushes the UsersPage to the page stack
    }

}
