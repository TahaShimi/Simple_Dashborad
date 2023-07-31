import { Component, EventEmitter, Output } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  Title: string = "";
  Draweropened =true ;

  constructor(private title: SideBarComponent) {
      this.title.toolBar_Title.subscribe((data: string) => {
      this.Title = data
      console.log(this.Title);
      this.toolbarContent = ([{ text: `${this.Title.slice(1).charAt(0).toUpperCase() + this.Title.substring(2, this.Title.length).toLowerCase()}`, location: "before" }, (this.Title == "/account") ? {
        widget: 'dxButton',
        location: 'after',
        options: {
          text: 'Add New Account',
          type: "default",
        }
      } : {}]);
      this.topbarContent = ([{
        widget: 'dxButton',
        location: 'before',
        options: {
          icon: 'home',
        }
      }, { text: '>', location: "before" }, { text: `${this.Title.slice(1).charAt(0).toUpperCase() + this.Title.substring(2, this.Title.length).toLowerCase()}`, location: "before" }]);
    });
  }

  toolbarContent = ([{ text: `${(this.Title != "") ? this.Title : "Dashboard"}`, location: "before" }, (this.Title == "/account") ? {
    widget: 'dxButton',
    location: 'after',
    options: {
      text: 'Add New Account',
      type: "default",
    }
  } : {}]);
  topbarContent = ([{
    widget: 'dxButton',
    location: 'before',
    options: {
      icon: 'home',
    }
  }, { text: '>', location: "before" },{ text: `${(this.Title != "") ? this.Title : "Dashboard"}`, location: "before" }]);



}
