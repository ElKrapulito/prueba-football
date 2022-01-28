import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {
  teams: any[];
  leagues: any[];

  @ViewChild('virtualTable', { static: false })
  nzTableComponent?: NzTableComponent<any>;
  private destroy$ = new Subject();

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.teams = this.route.snapshot.data.teams;
    this.leagues = this.route.snapshot.data.leagues;

    this.teams = this.teams.map((team, i) => {
      let leagueName = this.leagues.filter(
        (league) => league['Identificador'] == team['Liga']
      )[0]['Nombre De La Liga'];
      return (team = { ...team, index: i, Liga: leagueName });
    });
  }

  scrollToIndex(index: number): void {
    this.nzTableComponent?.cdkVirtualScrollViewport?.scrollToIndex(index);
  }

  trackByIndex(_: number, team: any): number {
    return team.index;
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
}
