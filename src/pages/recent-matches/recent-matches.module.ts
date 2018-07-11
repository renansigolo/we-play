import {NgModule} from '@angular/core'
import {IonicPageModule} from 'ionic-angular'
import {RecentMatchesPage} from './recent-matches'

@NgModule({
	declarations: [RecentMatchesPage],
	imports: [IonicPageModule.forChild(RecentMatchesPage)]
})
export class RecentMatchesPageModule {}
