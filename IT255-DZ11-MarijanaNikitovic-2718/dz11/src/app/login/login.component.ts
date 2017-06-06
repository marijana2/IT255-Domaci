import { Directive } from 'angular2/core';
import { Component } from 'angular2/core';
import {FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common'
import {Http, HTTP_PROVIDERS, Headers, Response} from 'angular2/http';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS} from 'angular2/router'
import {User} from '../registration/user.model';



@Component({
    selector: 'login',
    templateUrl: 'app/login/login.html',
    styleUrls: ['css/styles.css'],
    directives: [FORM_DIRECTIVES],
    viewBindings: [FORM_BINDINGS]

})
export class LoginComponent {


    // response: Response;
    http: Http;
    router: Router;
    curentUser = false;
    model: any = {};

    constructor(builder: FormBuilder, http: Http,  router: Router) {
      // this.response = response;
      this.http = http;
      this.router = router;
     if(localStorage.getItem('token') != null){
       this.router.parent.navigate(['./Home']);
     }

    }

    onLogIn(): void {
    var data = "username="+this.model.username+"&password="+this.model.password;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post('http://localhost/php/login.php', data, {headers:headers})
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
    //   .map(res => res)
    //   .subscribe( data => this.model = data,
    // err => alert(JSON.stringify(err)),
    // () => {
    //  if(this.model._body.indexOf("error") === -1){
    //   var obj = JSON.parse(this.model._body);
    //   localStorage.setItem('token', obj.token);
    //     this.router.parent.navigate(['./Home']);
    //  }else{
    //   var obj = JSON.parse(this.model._body);
    //   // document.getElementsByClassName("alert")[0].style.display = "block";
    //   document.getElementsByClassName("alert")[0].innerHTML = obj.error.split("\\r\\n").join("<br/>").split("\"").join("");
    //  }
    //  }
    // );

    }
  }
