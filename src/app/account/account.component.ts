import { Component } from '@angular/core';
import { ProfileService } from './service/profile.service';
import { Profile } from './service/profile.interface';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  details: Profile[] = [];

  constructor(private accountService: ProfileService){
    this.details = accountService.profile_details;
    console.log(this.details);
  }
}
