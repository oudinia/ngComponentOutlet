import {Compiler, Component, Injector, Input, NgModuleFactory, OnInit, ReflectiveInjector} from '@angular/core';
import {CountryCodeService} from '../service/country-code.service';
import {CountryWidgetComponent} from '../country-widget/country-widget.component';
import {CountryWidgetModule} from '../country-widget/country-widget.module';
import {Http} from '@angular/http';

@Component({
  selector: 'app-widget-container',
  templateUrl: './widget-container.component.html',
  styleUrls: ['./widget-container.component.css']
})
export class WidgetContainerComponent implements OnInit {

  @Input() countryCode: string;

  public componentToLoad;

  public module: NgModuleFactory<any>;
  public mInjector: Injector;
  private countryCodeService = new CountryCodeService();

  constructor(private compiler: Compiler, private injector: Injector,
              private http: Http) {

    this.mInjector = ReflectiveInjector.resolveAndCreate([{
      provide: CountryCodeService,
      useValue: this.countryCodeService
    }], this.injector);

  }

  ngOnInit() {
    this.componentToLoad = CountryWidgetComponent;
    this.countryCodeService.countryCode = this.countryCode;
    this.module = this.compiler.compileModuleSync(CountryWidgetModule);
  }

}
