import {Component} from '@angular/core'
import {IonicPage, NavController, NavParams} from 'ionic-angular'

/**
 * Generated class for the RecentMatchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-recent-matches',
	templateUrl: 'recent-matches.html'
})
export class RecentMatchesPage {
	constructor(public navCtrl: NavController, public navParams: NavParams) {}

	ionViewDidLoad() {
		console.log('ionViewDidLoad RecentMatchesPage')
	}
}
