import { Directive } from 'angular2/core';
import { Component } from 'angular2/core';
import {FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common'
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS} from 'angular2/router'
import {User} from '../registration/user.model';
@Component({
    selector: 'registration',
    templateUrl: 'app/registration/registration.html',
    styleUrls: ['css/styles.css'],
    directives: [FORM_DIRECTIVES],
viewBindings: [FORM_BINDINGS]
})
export class RegistrationComponent {

  signupForm: ControlGroup;
  http: Http;
  router: Router;
  model: any = {};
  curentUser = User;

  constructor(builder: FormBuilder, http: Http,  router: Router) {
	this.http = http;
	this.router = router;
  this.signupForm = builder.group({
     username: ["", Validators],
     password: ["", Validators],
     firstName: ["", Validators],
     lastName: ["", Validators],

   });

   if(localStorage.getItem('token') != null){
		 this.router.parent.navigate(['./Home']);
   }

  }

  onSignUp(): void {
	var data = "username="+this.model.username+"&password="+this.model.password+"&firstName="+this.model.firstName+"&lastName="+this.model.lastName;
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	this.http.post('http://localhost/php/signup.php',data, {headers:headers})
    .map(res => res)
    .subscribe( user =>
      {this.model = user},
	err => {
		var obj = JSON.parse(err._body);
		// document.getElementsByClassName("alert")[0].style.display = "block";
		// document.getElementsByClassName("alert")[0].innerHTML = obj.error.split("\\r\\n").join("<br/>").split("\"").join("");
	},
	() => {
    var obj = JSON.parse(this.model._body);
    console.log(obj);
    localStorage.setItem('token', JSON.stringify(obj));
      this.router.parent.navigate(['/Home']);
      location.reload();
	 }
	);

}
}
