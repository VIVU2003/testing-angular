import { Component, signal } from '@angular/core';
// import {GetdetailsService} from 'testing-lib';
import { User } from './Components/user/user';
import { ProdDetail } from './Components/prod-detail/prod-detail';
@Component({
  selector: 'app-root',
  imports:[User,ProdDetail],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('testing-angular');
  
  
}
