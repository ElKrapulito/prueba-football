import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AvatarModalComponent } from '../../../shared/components/avatar-modal/avatar-modal.component';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../../../services/request.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-teams-form',
  templateUrl: './teams-form.page.html',
  styleUrls: ['./teams-form.page.scss'],
})
export class TeamsFormPage implements OnInit {
  teamForm!: FormGroup;
  leagues: any[];
  avatarUrl: FormControl;
  team: any;

  constructor(
    private fb: FormBuilder,
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef,
    private route: ActivatedRoute,
    private req: RequestService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.leagues = this.route.snapshot.data.leagues;
    this.team = this.route.snapshot.data.team;

    this.avatarUrl = new FormControl();
    this.avatarUrl.setValidators([Validators.required]);
    this.avatarUrl.setValue(this.team ? this.team['Logo del Equipo'] : null);

    this.teamForm = this.fb.group({
      teamName: [
        this.team ? this.team['Nombre del equipo'] : null,
        [Validators.required],
      ],
      league: [this.team ? this.team['Liga'] : null, [Validators.required]],
    });
    this.teamForm.addControl('avatarUrl', this.avatarUrl);
  }

  submitForm(): void {
    if (this.teamForm.valid) {
      let team = {
        ['Nombre del equipo']: this.teamForm.get('teamName').value,
        ['Logo del Equipo']: this.teamForm.get('avatarUrl').value,
        ['Liga']: this.teamForm.get('league').value,
      };

      if (this.team) {
        this.req.update('teams', this.team['id'], team).subscribe((res) => {
          if (res) {
            this.location.back();
          }
        });
      } else {
        this.req.create('teams', team).subscribe((res) => {
          if (res) {
            this.location.back();
          }
        });
      }
    } else {
      Object.values(this.teamForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  createComponentModal(): void {
    const modal = this.modal.create({
      nzTitle: 'Pick your logo',
      nzContent: AvatarModalComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzFooter: [],
    });

    modal.afterClose.subscribe((result) => {
      if (result) {
        this.avatarUrl.setValue(result.data);
      }
    });
  }

  goBack() {
    this.location.back();
  }
}
