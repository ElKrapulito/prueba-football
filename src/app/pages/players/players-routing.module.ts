import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayersPage } from './players.page';
import { ListPlayersResolver } from '../../helpers/resolvers/list-players.resolver';
import { ListTeamsResolver } from '../../helpers/resolvers/list-teams.resolver';
import { PlayerResolver } from '../../helpers/resolvers/player.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: {
      players: ListPlayersResolver,
      teams: ListTeamsResolver,
    },
    component: PlayersPage,
  },
  {
    path: 'create',
    resolve: {
      teams: ListTeamsResolver,
    },
    loadChildren: () =>
      import('./player-form/player-form.module').then(
        (m) => m.PlayerFormPageModule
      ),
  },
  {
    path: 'edit/:id',
    resolve: {
      teams: ListTeamsResolver,
      player: PlayerResolver,
    },
    loadChildren: () =>
      import('./player-form/player-form.module').then(
        (m) => m.PlayerFormPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayersPageRoutingModule {}
