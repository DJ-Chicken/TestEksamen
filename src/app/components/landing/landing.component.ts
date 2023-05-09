import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { CookiePopupComponent } from 'src/app/components/cookie-popup/cookie-popup.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    const cookieExists = this.cookieService.check('cookiePolicy');
    if (!cookieExists) {
      this.openDialog();
      this.cookieService.set('cookiePolicy', 'accepted', 30); // set cookie to expire in 30 days
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(CookiePopupComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: \\${result}`);
    });
  }
}
