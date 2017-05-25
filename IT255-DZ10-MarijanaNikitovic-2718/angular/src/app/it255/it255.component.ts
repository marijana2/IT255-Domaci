import { Component, OnInit } from '@angular/core';
import { Http, Response , Headers} from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-it255',
  templateUrl: './it255.component.html',
  styleUrls: ['./it255.component.css']
})
export class It255Component implements OnInit {

  data: Object[];
  constructor(private http: Http) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('token', localStorage.getItem('token'));
    http.get('http://localhost/dz10/korisnici.php', {headers: headers})
      .map(res => res.json()).share()
      .subscribe(data => {
          this.data = data;
          console.log('Konektovano');
        }
      );

  }

  ngOnInit() {
  }

}
