import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './../../../../core/services/categories.service';
import { Category } from './../../../../core/models/category.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  public data$: Observable<any>;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.getAllInfo();
  }

  getAllInfo(): void {
    this.data$ = this.categoriesService.getAllCategories();
  }
}
