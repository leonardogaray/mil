import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpResponse  } from '@angular/common/http';

@Component({
  selector: 'app-report',
  templateUrl: 'report.page.html',
  styleUrls: ['report.page.scss']
})
export class ReportPage {  
  location: string = "none";
  comments: string= "none";
  camera: string = "none";
  smokeColor: string = "none";
  fireColor: string = "none";
  currentScreen = 0;

  constructor(private router: Router, private http: HttpClient) {
  }

  init(){
    this.camera = "none";
    this.currentScreen = 0;
  }

  ionViewWillEnter() {
    this.init();
  }

  nextScreenReportFire(location: string) {
    this.location = location;
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

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = '/en/api/photo';
    
    this.http.post(url, {
      location: this.location,
      comments: this.comments,
      camera: this.camera,
      smokeColor: this.smokeColor,
      fireColor: this.fireColor,
    },  { headers }).pipe().subscribe(
      response => {
        console.log('Response:', response);
        this.router.navigate(['/tabs/home']);
        // Handle success
      },
      error => {
        console.error('Error:', error);
        // Handle error
      }
    );
  }
}
