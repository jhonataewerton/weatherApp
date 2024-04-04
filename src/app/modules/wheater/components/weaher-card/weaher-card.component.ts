import { Component, Input, OnInit } from '@angular/core';
import {
  faDroplet,
  faTemperatureHigh,
  faTemperatureLow,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import { WeatherDatas } from 'src/app/models/interfaces/weatherDatas.interface';

@Component({
  selector: 'app-weaher-card',
  templateUrl: './weaher-card.component.html',
  styleUrls: [],
})
export class WeaherCardComponent {
  @Input() weatherDatas!: WeatherDatas;

  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;
}
