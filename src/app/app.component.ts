import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuNewsComponent } from "./components/menu-news/menu-news.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuNewsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog-angular-new';
}
