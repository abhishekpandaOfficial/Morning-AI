import { Component } from '@angular/core';

// If we want to Make a Class as Component then we have to mark with "@Component" decorator 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Morning-AI';

  constructor()
  {
    
  }
}
