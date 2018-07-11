import {Component} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {IonicPage, NavController, NavParams} from 'ionic-angular'

@IonicPage()
@Component({
	selector: 'page-signup',
	templateUrl: 'signup.html'
})
export class SignupPage {
	signupForm: FormGroup

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public formBuilder: FormBuilder
	) {
		this.signupForm = formBuilder.group({
			name: [
				'',
				Validators.compose([
					Validators.maxLength(30),
					Validators.minLength(5),
					Validators.pattern('[a-zA-Z]+ [a-zA-Z]+ *[a-zA-Z]*'),
					Validators.required
				])
			],
			email: ['', Validators.compose([Validators.email, Validators.required])],
			password: [
				'',
				Validators.compose([
					Validators.maxLength(30),
					Validators.minLength(6),
					Validators.required
				])
			],
			repeatPassword: [
				'',
				Validators.compose([
					Validators.maxLength(30),
					Validators.minLength(6),
					Validators.required
				])
			]
		})
	}

	// Define the get method to keep the HTML cleaner
	get name() {
		return this.signupForm.get('name')
	}
	get email() {
		return this.signupForm.get('email')
	}
	get password() {
		return this.signupForm.get('password')
	}
	get repeatPassword() {
		return this.signupForm.get('repeatPassword')
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SignupPage')
	}

	submitSignup() {
		console.log('submitSignup')
	}
}
