import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UsersPage } from '../users/users';
import { ShopPage } from '../shop/shop';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    usersPage = UsersPage;

    constructor(public navCtrl: NavController) { // <-- class provided by ionic to 
        // allow us to manage the stack of pages

    }

    onGoToUsers() {
        // this.navCtrl.push(UsersPage); // This pushes the UsersPage to the page stack
        this.navCtrl.push(UsersPage, {}, {
            direction: 'back', // default for push is 'forward'
            duration: 2000, // 2 seconds
            easing: 'ease-out'
        });
    }

    onGoToShop() {
        this.navCtrl.push(ShopPage);
    }

}
