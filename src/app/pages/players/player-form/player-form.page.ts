import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../../../services/request.service';
import { Location } from '@angular/common';
import { AvatarModalComponent } from 'src/app/shared/components/avatar-modal/avatar-modal.component';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.page.html',
  styleUrls: ['./player-form.page.scss'],
})
export class PlayerFormPage implements OnInit {
  playerForm: FormGroup;
  player: any;
  teams: any[];
  avatar: FormControl;

  constructor(
    private fb: FormBuilder,
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef,
    private route: ActivatedRoute,
    private req: RequestService,
    private location: Location
  ) {}

  ngOnInit() {
    this.teams = this.route.snapshot.data.teams;
    this.player = this.route.snapshot.data.player;

    this.avatar = new FormControl();
    this.avatar.setValue(this.player ? this.player['Avatar'] : null);
    this.avatar.addValidators([Validators.required]);

    this.playerForm = this.fb.group({
      playerName: [
        this.player ? this.player['Nombre del Jugador'] : null,
        [Validators.required],
      ],
      teamId: [this.player ? this.player.teamId : null, [Validators.required]],
    });

    this.playerForm.addControl('avatar', this.avatar);
  }

  submitForm() {
    if (this.playerForm.valid) {
      let player = {
        ['Nombre del Jugador']: this.playerForm.get('playerName').value,
        ['Avatar']: this.playerForm.get('avatar').value,
        ['teamId']: this.playerForm.get('teamId').value,
      };

      if (this.player) {
        this.req
          .update('players', this.player['id'], player)
          .subscribe((res) => {
            if (res) {
              this.location.back();
            }
          });
      } else {
        this.req.create('players', player).subscribe((res) => {
          if (res) {
            this.location.back();
          }
        });
      }
    } else {
      Object.values(this.playerForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  createComponentModal(): void {
    const modal = this.modal.create({
      nzTitle: 'Pick Avater',
      nzContent: AvatarModalComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzFooter: [],
    });

    modal.afterClose.subscribe((result) => {
      if (result) {
        this.avatar.setValue(result.data);
      }
    });
  }

  goBack() {
    this.location.back();
  }
}
