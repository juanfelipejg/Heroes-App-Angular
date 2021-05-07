import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html'
})
export class HeroeCardComponent implements OnInit {

@Input() heroe:any = {}
@Input() index:any;

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  verHeroe(){
    console.log(this.index)
    this._router.navigate(['/heroe', this.index])
  }

}
