import { Injectable } from '@angular/core';


export class List {
  text!: string;

  icon!: string;

  path!: string;
}

const items: List[] = [
  { text: 'Dashboard', icon: 'home', path: 'dashboard' },
  { text: 'Account', icon: 'card', path: 'account' },
  { text: 'Social', icon: 'mention', path: 'social' },
  { text: 'Corporate', icon: 'chart', path: 'corporate' },
  { text: 'Settings', icon: 'preferences', path: 'setting' },
];

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenuItems(): List[] {
    return items;
  }

}
