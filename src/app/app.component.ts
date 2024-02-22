import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';

// Metadata
@Component({
  selector: 'root-directive',
  standalone: true,
  imports: [RouterOutlet, AComponent, BComponent],
  templateUrl: './app.component.html', // HTML is here
  styleUrl: './app.component.css' // Styles are here
})

// Logic
export class AppComponent {
  title:string = 'my-first-app';
  Name:string = 'Ariel';
  Age:number = 21;
}
