import {Component} from '@angular/core'
import {IonicPage, NavController, NavParams} from 'ionic-angular'

/**
 * Generated class for the AddMatchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-add-matches',
	templateUrl: 'add-matches.html'
})
export class AddMatchesPage {
	constructor(public navCtrl: NavController, public navParams: NavParams) {}

	ionViewDidLoad() {
		console.log('ionViewDidLoad AddMatchesPage')
	}
}
