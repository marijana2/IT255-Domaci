import {Component, OnInit} from 'angular2/core';
import {RouteConfig,Router, ROUTER_DIRECTIVES} from 'angular2/router';
import { MainPageComponent } from './home/home.component';
import { LoginComponent}  from './login/login.component';
import { FindBusComponent } from './findbus/findbus.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddImpressionComponent } from './addimpression/addimpression.component';
import {User} from "./registration/user.model";
import { UpdateBusComponent } from "./updatebus/updatebus"

@Component({
    selector: 'my-app',
	templateUrl: 'app/router.html',
	directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path:'./',    name: 'Home',   component: MainPageComponent, useAsDefault: true},
  {path:'./login', name:'Login', component: LoginComponent},
  {path:'./register', name:'Register', component: RegistrationComponent},
  {path:'./findbus', name: 'FindBus', component: FindBusComponent},
  {path:'./addimrepssion', name: 'AddImpression', component: AddImpressionComponent},
  {path:'./updatebus', name: 'UpdateBus', component: UpdateBusComponent}



])

export class AppComponent {
	router: Router;
  token: User;

	constructor(router: Router) {
    this.router = router;
		this.token = JSON.parse(localStorage.getItem('token'));
	}

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('token');
    location.reload();
    // this.router.navigate[''];
  }


}
