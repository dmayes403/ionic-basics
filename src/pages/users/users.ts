import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserPage } from './user/user';

@Component({
    selector: 'page-users',
    templateUrl: 'users.html',
})
export class UsersPage {
    constructor(
        private navCtrl: NavController
    ) {

    }
    onLoadUser(name: string) {
        // this adds the user page to the nav stack and also passes data as well
        this.navCtrl.push(UserPage, {userName: name});
    }
}
