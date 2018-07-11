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
			title: 'Rating',
			description: '1500'
		},
		{
			title: 'Played',
			description: '0'
		},
		{
			title: 'Won',
			description: '0'
		},
		{
			title: 'Lost',
			description: '0'
		},
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
