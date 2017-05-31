import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-dodaj',
  templateUrl: './dodaj.component.html',
  styleUrls: ['./dodaj.component.css']
})
export class DodajComponent implements OnInit {

  http: Http;


  dodajKorisnika = new FormGroup({
    ime: new FormControl(),
    prezime: new FormControl()
  });
  constructor(http: Http) {
    this.http = http;
  }

  ngOnInit() {
  }

  onDodaj() {
    const data = 'ime=' + this.dodajKorisnika.value.ime +
      '&prezime=' + this.dodajKorisnika.value.prezime;
    console.log(data);
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post('http://localhost/marijanaProba/dodaj.php',
      data, { headers: headers }).subscribe(
      data => {
        if (data['_body'] === "ok") {
          console.log('uspesno');
        }
      }
    );
  }
}
