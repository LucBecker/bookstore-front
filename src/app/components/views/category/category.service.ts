import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl: String = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private _snack: MatSnackBar) { }

  findAll(): Observable<Category[]> {
    const url = `${this.baseUrl}/categories`
    return this.http.get<Category[]>(url)
  }

  create(category: Category): Observable<Category> {
    const url = `${this.baseUrl}/categories`
    return this.http.post<Category>(url, category)
  }

  message(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}