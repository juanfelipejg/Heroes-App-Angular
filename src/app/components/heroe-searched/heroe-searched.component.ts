import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-searched',
  templateUrl: './heroe-searched.component.html',
  styleUrls: ['./heroe-searched.component.css'],
})
export class HeroeSearchedComponent implements OnInit {
  heroes: any = {};
  termino: string = '';

  constructor(
    private _activatedroute: ActivatedRoute,
    private _service: HeroesService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._activatedroute.params.subscribe((params) => {
      this.termino = params['termino'];
      this.heroes = this._service.findHeroes(params['termino']);
    });
  }

  verHeroe(index: number) {
    this._router.navigate(['/heroe', index]);
  }
}
