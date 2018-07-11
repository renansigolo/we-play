import {Component} from '@angular/core'
import {IonicPage, NavController, NavParams} from 'ionic-angular'

@IonicPage()
@Component({
	selector: 'page-profile',
	templateUrl: 'profile.html'
})
export class ProfilePage {
	items = [
		{
			title: 'Member Since',
			description: '2018'
		},
		{
			title: 'Email Address',
			description: 'renan.sigolo@gmail.com'
		}
	]

	constructor(public navCtrl: NavController, public navParams: NavParams) {}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ProfilePage')
	}
}
