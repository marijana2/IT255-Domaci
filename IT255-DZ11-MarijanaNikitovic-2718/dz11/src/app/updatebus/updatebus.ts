import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Router } from '@angular/router';
@Component({
  selector: 'UpdateBus',
  templateUrl: 'updatebus.html'
})

export class UpdateBusComponent {

  http: Http;
  router: Router;

  updatebusForm = new FormGroup({
    model_naziv: new ControlGroup(),
    broj_sedista: new ControlGroup(),
    id: new ControlGroup()
  });


  constructor(http: Http, router: Router){
      this.http = http;
      this.router = router;
  }


  updateBus(){

    var data = "model_naziv="+this.updatebusForm.value.model_naziv + "&broj_sedista=" + this.updatebusForm.value.broj_sedista + "&id=" + this.updatebusForm.value.id;
    console.log(data);
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post('http://localhost/php/updatebus.php',
    data, { headers: headers }).subscribe(
      data => {
          var obj = JSON.parse(data["_body"]);
          if (obj.success) {
              this.router.navigate(['./']);
            }
          }
      );
  }




}
