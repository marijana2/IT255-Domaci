import {Component, Directive } from 'angular2/core';
import {FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common'
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS} from 'angular2/router'


@Component({
 selector: 'AddImpression',
 templateUrl: 'app/addimpression/addimpression.html',
 styleUrls: ['css/styles.css'],
 directives: [FORM_DIRECTIVES],
viewBindings: [FORM_BINDINGS]

})
export class AddImpressionComponent {

   busForm: ControlGroup;
   http: Http;
   router: Router;
   postResponse: String;
   select:Int = 1;


  constructor(builder: FormBuilder, http: Http,  router: Router) {
 	this.http = http;
 	this.router = router;
  this.busForm = builder.group({
      ocena: ["", Validators.none],
      komentar: ["", Validators.none],
    });
   }

 onAddCom(): void {
	var data = "&ocena="+this.busForm.value.ocena+
             "&komentar="+this.busForm.value.komentar;
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	this.http.post('http://localhost/php/addcom.php',data, {headers:headers})
  .map(res => res)
  .subscribe( data => this.postResponse = data,
err => alert(JSON.stringify(err)),
() => {
if(this.postResponse._body.indexOf("error") === -1){
  alert("Uspesno ste dodali utisak");
    this.router.parent.navigate(['./Home']);
 }else{
  alert("Greska! Niste dodali utisak");
 }
 }
);

}
}
