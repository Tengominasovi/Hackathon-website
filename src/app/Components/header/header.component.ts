import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  downloadFolder() {
    const link = document.createElement('a');
    link.href = 'assets/files/Escape The Lab.apk'; // Path to the file
    link.download = 'Escape The Lab.apk'; // Suggested filename for the download
    link.click();
  }
  
}
