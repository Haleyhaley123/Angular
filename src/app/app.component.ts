import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Haha';
  public showMenu = false;
  public darkModeActive = false;

  public toggleMenu() {
    this.showMenu = !this.showMenu;
 }
 public modeToggleSwitch(){
this.darkModeActive = !this.darkModeActive;
 }
 
 
}
