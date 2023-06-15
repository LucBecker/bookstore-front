import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  title = new FormControl("",  [Validators.minLength(3)]);
  author = new FormControl("",  [Validators.minLength(3)]);
  text = new FormControl("",  [Validators.minLength(10)]);

  constructor(
    private service: BookService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  getMessage() {
    if (this.title.invalid) {
      return "The title field must contain between 3 and 100 characters";
    }
    if (this.author.invalid) {
      return "The title field must contain between 3 and 100 characters";
    }
    if (this.text.invalid) {
      return "The title field must contain between 10 and 100 characters";
    }
    return false;
  }
}
