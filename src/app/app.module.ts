import {ErrorHandler, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular'
import {MyApp} from './app.component'

import {HomePage} from '../pages/home/home'
import {TabsPage} from '../pages/tabs/tabs'

import {AddMatchesPage} from '../pages/add-matches/add-matches'
import {LeaderboardPage} from '../pages/leaderboard/leaderboard'
import {LoginPage} from '../pages/login/login'
import {ProfilePage} from '../pages/profile/profile'
import {RecentMatchesPage} from '../pages/recent-matches/recent-matches'
import {SignupPage} from '../pages/signup/signup'

import {SplashScreen} from '@ionic-native/splash-screen'
import {StatusBar} from '@ionic-native/status-bar'

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		TabsPage,
		ProfilePage,
		LeaderboardPage,
		RecentMatchesPage,
		AddMatchesPage,
		LoginPage,
		SignupPage
	],
	imports: [BrowserModule, IonicModule.forRoot(MyApp)],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		TabsPage,
		ProfilePage,
		LeaderboardPage,
		RecentMatchesPage,
		AddMatchesPage,
		LoginPage,
		SignupPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler}
	]
})
export class AppModule {}
