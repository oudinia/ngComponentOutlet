import { Component, OnInit } from '@angular/core';
import {CountryCodeService} from '../service/country-code.service';

@Component({
  selector: 'app-country-widget',
  templateUrl: './country-widget.component.html',
  styleUrls: ['./country-widget.component.css']
})
export class CountryWidgetComponent implements OnInit {

  public countryFlagUrl: string;

  constructor(public countryCodeService: CountryCodeService) {

  }

  ngOnInit() {
    this.countryFlagUrl = `https://restcountries.eu/data/${this.countryCodeService.countryCode}.svg`;
  }

}
