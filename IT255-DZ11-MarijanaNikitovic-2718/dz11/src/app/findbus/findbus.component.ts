
import { Component, Directive } from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import {SearchPipe} from 'app/pipe/search';
import {SearchPipeKV} from 'app/pipe/searchKV';
import 'rxjs/Rx';
import {Router} from 'angular2/router';
import {FORM_DIRECTIVES , FORM_BINDINGS} from 'angular2/common';
@Component({
    selector: 'FindBus',
    templateUrl: 'app/findbus/findbus.html',
    pipes: [SearchPipe, SearchPipeKV]
})

export class FindBusComponent {
    http: Http;
    router:Router;
    broj_sedista:String ="";
    naziv_model:String ="";
    bus : Object[];




    constructor(http: Http, router: Router){
        this.http = http;
        this.router = router;
        var headers = new Headers();

        http.get('http://localhost/php/getbus.php',{headers:headers})
            .map(res => res.json())
            .subscribe(bus => {this.bus = bus.bus;
            });

    }
}
