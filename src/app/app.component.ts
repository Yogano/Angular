import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showMode: boolean = false;

  switchSection(mode: string) {
    if (mode === 'recipes') {
      this.showMode = true;
    }

    if (mode === 'shopping-list') {
      this.showMode = false;
    }
  }
}
