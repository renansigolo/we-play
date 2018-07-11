import {Component} from '@angular/core'

import {AddMatchesPage} from '../add-matches/add-matches'
import {LeaderboardPage} from '../leaderboard/leaderboard'
import {ProfilePage} from '../profile/profile'
import {RecentMatchesPage} from '../recent-matches/recent-matches'

@Component({
	templateUrl: 'tabs.html'
})
export class TabsPage {
	tab1Root = ProfilePage
	tab2Root = LeaderboardPage
	tab3Root = RecentMatchesPage
	tab4Root = AddMatchesPage

	// constructor() {}
}
