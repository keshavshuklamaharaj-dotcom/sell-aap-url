import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-userflow-remote',
  standalone: true,
  template: `
    <div class="remote-container">
      <iframe [src]="remoteUrl" frameborder="0"></iframe>
    </div>
  `,
  styles: [`
    .remote-container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    iframe {
      width: 100%;
      height: calc(100vh - 150px);
      border: none;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
  `]
})
export class UserFlowComponent implements OnInit {
  remoteUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    const timestamp = new Date().getTime();
    this.remoteUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`http://localhost:4202?t=${timestamp}`);
  }
}
