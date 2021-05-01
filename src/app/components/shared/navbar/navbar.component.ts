import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private _router: Router, private _service: HeroesService) {}

  ngOnInit(): void {}

  buscarHeroe(termino: string) {
    this._router.navigate(['/search', termino]);
  }
}
