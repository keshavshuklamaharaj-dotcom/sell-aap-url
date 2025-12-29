import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    standalone: true,
    template: `
    <div style="padding: 40px; text-align: center;">
      <h1 style="color: #333; font-size: 2rem;">Welcome to MFE Cloud</h1>
      <p style="color: #666; margin-top: 20px;">Click on the sidebar links to navigate</p>
    </div>
  `
})
export class HomeComponent { }
