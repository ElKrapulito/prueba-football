import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaguesPage } from './leagues.page';
import { ListLeaguesResolver } from '../../helpers/resolvers/list-leagues.resolver';
import { ListTeamsResolver } from '../../helpers/resolvers/list-teams.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: {
      leagues: ListLeaguesResolver,
      teams: ListTeamsResolver,
    },
    component: LeaguesPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaguesPageRoutingModule {}
