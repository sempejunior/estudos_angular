import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { Weather } from 'src/app/models/interfaces/weather.interface';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  // styleUrls: ['']
})
export class WeatherHomeComponent implements OnInit {
  initialCityName = 'São Paulo';
  weatherData!: Weather;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: string): void {
    this.weatherService.getWeatherDatas(cityName).subscribe({
      next: (response) => {
        response && (this.weatherData = response);
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
