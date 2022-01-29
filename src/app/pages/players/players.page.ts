import { Component, OnInit, ViewChild } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { RequestService } from '../../services/request.service';
import { ActivatedRoute } from '@angular/router';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {
  @ViewChild('playersTable', { static: false })
  nzTableComponent?: NzTableComponent<any>;
  private destroy$ = new Subject();

  players: any[];
  playersDisplay: any[];
  teams: any[];
  listOfCurrentPageData: readonly any[] = [];

  searchValuePlayer = '';
  visiblePlayer = false;

  searchValueTeam = '';
  visibleTeam = false;

  constructor(
    private route: ActivatedRoute,
    private req: RequestService,
    private modal: NzModalService
  ) {}

  ngOnInit() {
    this.players = this.route.snapshot.data.players;
    this.teams = this.route.snapshot.data.teams;

    this.players = this.players.map((player, i) => {
      let teamName = this.teams.filter(
        (team) => team['id'] == player['teamId']
      )[0]['Nombre del equipo'];
      return (player = { ...player, index: i, teamId: teamName });
    });

    this.playersDisplay = [...this.players];
  }

  trackByIndex(_: number, team: any): number {
    return team.index;
  }

  scrollToIndex(index: number): void {
    this.nzTableComponent?.cdkVirtualScrollViewport?.scrollToIndex(index);
  }

  showDeleteConfirm(player: any): void {
    this.modal.confirm({
      nzTitle: `Are you sure that you want to delete this player?`,
      nzContent: `<b style="color: red;"><p>Player: ${player['Nombre del Jugador']}</p><p>Team: ${player['teamId']}</p></b>`,
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        this.req.delete('players', player['id']).subscribe();
        this.players = this.players.filter(
          (item) => item['id'] != player['id']
        );
      },
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel'),
    });
  }

  onCurrentPageDataChange($event: readonly any[]): void {
    this.listOfCurrentPageData = $event;
    // this.refreshCheckedStatus();
  }

  ngAfterViewInit(): void {
    this.nzTableComponent?.cdkVirtualScrollViewport?.scrolledIndexChange
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: number) => {
        console.log('scroll index to', data);
      });
  }

  ngOnDestroy(): void {
    // this.destroy$.next();
    this.destroy$.complete();
  }

  resetPlayer(): void {
    this.searchValuePlayer = '';
    this.searchPlayer();
  }

  searchPlayer(): void {
    this.visiblePlayer = false;
    if (this.searchValueTeam == '') {
      this.playersDisplay = this.players.filter(
        (item: any) =>
          item['Nombre del Jugador']
            .toLowerCase()
            .indexOf(this.searchValuePlayer.toLowerCase()) !== -1
      );
    } else {
      this.playersDisplay = this.playersDisplay.filter(
        (item: any) =>
          item['Nombre del Jugador']
            .toLowerCase()
            .indexOf(this.searchValuePlayer.toLowerCase()) !== -1
      );
    }
  }

  resetTeam(): void {
    this.searchValueTeam = '';
    this.searchTeam();
  }

  searchTeam(): void {
    this.visibleTeam = false;
    if (this.searchValuePlayer == '') {
      this.playersDisplay = this.players.filter(
        (item: any) =>
          item['teamId']
            .toLowerCase()
            .indexOf(this.searchValueTeam.toLowerCase()) !== -1
      );
    } else {
      this.playersDisplay = this.playersDisplay.filter(
        (item: any) =>
          item['teamId']
            .toLowerCase()
            .indexOf(this.searchValueTeam.toLowerCase()) !== -1
      );
    }
  }
}
