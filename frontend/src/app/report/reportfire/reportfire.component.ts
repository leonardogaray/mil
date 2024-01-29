import { Component, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-report-reportfire',
  templateUrl: './reportfire.component.html',
  styleUrls: ['./reportfire.component.scss'],
})
export class ReportfireComponent  implements OnInit {
  @Output() onNextScreen = new EventEmitter<string>();

  private map: any;
  private marker: any;
  private lat: number = -33.27688650546989;
  private lng: number = -59.820610521170714;

  constructor() { }


  ngAfterViewInit(): void {
    let container: any = L.DomUtil.get('map');
    if (container && container['_leaflet_id'] != null) {
      container.remove();
    }

    let self = this;
    navigator.geolocation.getCurrentPosition(function(position){
      self.initMap();
    },function(e){
      console.log("SSL Certificate required", e);
      self.initMap();
    },{timeout:10000});
  }

  private initMap(): void {
    const defaultIcon = L.icon({
      iconUrl: './assets/marker-icon.png',
      shadowUrl: './assets/marker-shadow.png'
    });

    this.marker = L.marker([this.lat, this.lng], {icon: defaultIcon});

    this.map = L.map('map', {
      center: [ this.lat, this.lng ],
      zoom: 11
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    this.marker
      .addTo(this.map)
      .bindPopup("<b>You are here</b>");

    this.map.on('move', () => {
        this.marker.setLatLng(this.map.getCenter());
    });
    
    setTimeout(() => { 
      this.map.invalidateSize();
    }, 500 );

  }

  ngOnInit() {}

  nextScreen() {
    this.onNextScreen.emit();
  }
}