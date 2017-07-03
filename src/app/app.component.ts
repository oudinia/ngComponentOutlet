import {Compiler, Component, Injector, NgModuleFactory, OnInit, ReflectiveInjector} from '@angular/core';
import {CountryCodeService} from './service/country-code.service';
import {Http} from '@angular/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public componentToLoad;
  // another comment to test rebase
  public module: NgModuleFactory<any>;
  public mInjector: Injector;

  // update by oudiniaExt dsdfsdfsdf
  // update by oudiniaExt new line
  // comment by oudinia32216546546546546546546546546546546546546546546546



  constructor(private countryCodeService: CountryCodeService, private http: Http) { }

  ngOnInit() {}

  newFunction2() {

  }
  newFunction() {

  }
}
