import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,q_auto,w_610/v1/hellofresh_s3/image/5e25f8a6e5491a4d4a6f9912-87bb0d1e.jpg'),
    new Recipe('Another test recipe', 'This is simply a test', 'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,q_auto,w_610/v1/hellofresh_s3/image/5e25f8a6e5491a4d4a6f9912-87bb0d1e.jpg'),
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
