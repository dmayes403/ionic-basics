import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

@Component({
    selector: 'page-user',
    templateUrl: 'user.html'
})
export class UserPage implements OnInit {
    name: string;

    // navParams allows us to retrieve data
    constructor(
        private navParams: NavParams,
        private navCtrl: NavController
    ) {}

    ngOnInit() {
        this.name = this.navParams.get('userName');
    }

    onGoBack() {
        // this.navCtrl.pop();
        this.navCtrl.popToRoot();
    }
}