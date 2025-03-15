import { Component, inject, OnInit, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  public title = 'ikeda-portfolio';
  private readonly titleService = inject(Title)
  
  ngOnInit(): void {
    this.titleService.setTitle('Portafolio IkedaDev 🍙')
  }
  
}
