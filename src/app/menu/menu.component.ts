import { Component, OnInit } from '@angular/core';
import { DISHES } from '../shared/dishes';
import { Dish } from "../shared/dish";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes = DISHES;
  selectedDish: Dish;

  constructor() { }

  ngOnInit() {
  }

  onSelected(dish: Dish){
    this.selectedDish = dish;
  }

}
