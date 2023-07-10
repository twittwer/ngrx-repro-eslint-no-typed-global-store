import { Component, inject } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Store } from '@ngrx/store';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent],
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';

  store = inject(Store)
}
