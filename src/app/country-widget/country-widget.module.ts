import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CountryWidgetComponent} from './country-widget.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CountryWidgetComponent],
  exports: [CountryWidgetComponent],
  entryComponents: [CountryWidgetComponent]
})
export class CountryWidgetModule {
}
