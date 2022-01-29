import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsPage } from './teams.page';
import { ListTeamsResolver } from '../../helpers/resolvers/list-teams.resolver';
import { ListLeaguesResolver } from '../../helpers/resolvers/list-leagues.resolver';
import { TeamResolver } from '../../helpers/resolvers/team.resolver';
import { ListPlayersResolver } from '../../helpers/resolvers/list-players.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: {
      teams: ListTeamsResolver,
      leagues: ListLeaguesResolver,
      players: ListPlayersResolver,
    },
    component: TeamsPage,
  },
  {
    path: 'create',
    loadChildren: () =>
      import('./teams-form/teams-form.module').then(
        (m) => m.TeamsFormPageModule
      ),
  },
  {
    path: 'edit/:id',
    resolve: {
      team: TeamResolver,
    },
    loadChildren: () =>
      import('./teams-form/teams-form.module').then(
        (m) => m.TeamsFormPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsPageRoutingModule {}
