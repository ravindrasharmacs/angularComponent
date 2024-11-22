import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [FormsModule] // Include FormsModule in the imports array
})
export class AppComponent {
  title = 'AppComponent';
  name = ''; // Your model property
}
