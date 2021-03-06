import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css'],
})
export class HeroeCardComponent implements OnInit {

@Input() heroe:any = {}
@Input() index:any;

@Output() heroeSelected: EventEmitter<number>

  constructor(private _router:Router) {
    this.heroeSelected = new EventEmitter()
   }

  ngOnInit(): void {
  }

  verHeroe(){    
    this._router.navigate(['/heroe', this.index]);
  }

}
