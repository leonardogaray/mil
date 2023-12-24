import { Component, AfterViewInit } from '@angular/core';
import MODIS from '../../scripts/MODIS';
import VIIRS from '../../scripts/VIIRS';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements AfterViewInit{

  private map: any;
  private marker: any;
  private lat: number = -33.27688650546989;
  private lng: number = -59.820610521170714;
  
  constructor() {}

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

    setTimeout(() => { 
      this.map.invalidateSize();
    }, 500 );

    
    //this.loadDataVIIRS();
    this.loadDataFromMODIS();
  }

  private loadDataFromMODIS(): void {
    MODIS.loadData().then( (coordinates) => {
      this.generateFires(coordinates);
    });

    VIIRS.loadData().then( (coordinates) => {
      this.generateFires(coordinates);
    });
  }

  private generateFires(coordinates: any[]): void {
    let self = this;
    coordinates.forEach(function(coordinate: any){
      L.circle([coordinate.latitude, coordinate.longitude], {
        color: 'red',
        fillColor: 'red',
        fillOpacity: 0.5,
        radius: 100
      })
        .addTo(self.map)
        .bindPopup(
          `<b>Lat:</b> ${coordinate.latitude}<br/>` +
          `<b>Lng:</b> ${coordinate.longitude}<br/>`);
    });
  }

}
