import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  constructor() {
    this.getGeolocation()
  }

  getGeolocation(){
    navigator.geolocation.getCurrentPosition(function(position){
      console.log(position);
    },function(e){
      console.log("SSL Certificate required", e);
    },{timeout:10000});
  }

  getCamera(){}

}
