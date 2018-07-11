import {Component} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {IonicPage, NavController, NavParams} from 'ionic-angular'

@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})
export class LoginPage {
	loginForm: FormGroup

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public formBuilder: FormBuilder
	) {
		this.loginForm = formBuilder.group({
			email: ['', Validators.compose([Validators.email, Validators.required])],
			password: ['', Validators.required]
		})
	}

	// Define the get method to keep the HTML cleaner
	get email() {
		return this.loginForm.get('email')
	}
	get password() {
		return this.loginForm.get('password')
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LoginPage')
	}

	submitLogin() {
		console.log('submitLogin')
	}
}
