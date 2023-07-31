import { Component, EventEmitter, Input, Output, ViewChild, inject } from '@angular/core';
import { List, MenuService } from './menu.service';
import { DxDrawerComponent } from 'devextreme-angular';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  @ViewChild(DxDrawerComponent, { static: false }) drawer!: DxDrawerComponent;
  menu: List[];
  openMode = 'shrink';
  revealMode = 'expand';
  icon!: string;
  @Output() toolBar_Title = new EventEmitter();
  @Output() DrawerOpened = new EventEmitter();

  isDrawerOpen = true;
  constructor(private menuService: MenuService) {
    this.menu = this.menuService.getMenuItems();
    this.icon = 'chevronleft';
  }
  
  itemClick() {
    this.toolBar_Title.emit(window.location.pathname);
  }
  
  openDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
    this.DrawerOpened.emit(this.isDrawerOpen);
    (this.isDrawerOpen) ? this.icon = 'chevronleft' : this.icon = 'chevronright';
  }
}

