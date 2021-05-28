import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Fried Eggs',
      'A taste breakfast staple. Add heat to eggs in a pan.',
      'https://pngimg.com/uploads/fried_egg/fried_egg_PNG46.png'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
