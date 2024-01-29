import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: 'report.page.html',
  styleUrls: ['report.page.scss']
})
export class ReportPage {  
  comments: string= "none";
  camera: string = "none";
  smokeColor: string = "none";
  fireColor: string = "none";
  currentScreen = 0;

  constructor(private router: Router) {
  }

  init(){
    this.camera = "none";
    this.currentScreen = 0;
  }

  ionViewWillEnter() {
    this.init();
  }

  nextScreenReportFire(camera:string) {
    this.camera = camera;
    this.currentScreen++;
  }
  nextScreenCamera(camera:string) {
    this.camera = camera;
    this.currentScreen++;
  }
  nextScreenFire(fireColor:string) {
    this.fireColor = fireColor;
    this.currentScreen++;
  }
  nextScreenSmoke(smokeColor:string) {
    this.smokeColor = smokeColor;
    this.currentScreen++;
  }
  nextScreenComments(comments:string) {
    this.comments = comments;
    this.router.navigate(['/tabs/home'])
  }
}
