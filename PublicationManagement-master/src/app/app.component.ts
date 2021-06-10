import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PublicationManagement';
  constructor(private localStorageService: LocalStorageService) {
    try {
    this.localStorageService.loadLocalStorage();
    } catch (error) {
      console.error(error);
    }
  }

  ngOnInit() {
  }

}
