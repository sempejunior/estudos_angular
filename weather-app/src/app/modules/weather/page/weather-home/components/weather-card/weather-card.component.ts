import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/interfaces/weather.interface';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  // styleUrls: [''],
})
export class WeatherCardComponent implements OnInit {
  @Input() weatherDatas!: Weather;
  constructor() {}

  ngOnInit(): void {
    console.log('Dados recebidos', this.weatherDatas);
  }
}
