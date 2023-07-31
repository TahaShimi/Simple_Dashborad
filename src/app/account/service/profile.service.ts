import { Injectable } from '@angular/core';
import { Profile } from './profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile_details: Profile[] = [];
  constructor() {
    this.profile_details = [{
      FirstName: 'Max',
      LastName: 'Smith',
      Company: 'Barthauer',
      Phone: +21653843261,
      WebSite: 'new.bathauer.de',
      Country: 'Germany',
      Communication: 'Email, phone',
    }]
  }

}
