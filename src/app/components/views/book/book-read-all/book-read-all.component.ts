import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-read-all',
  templateUrl: './book-read-all.component.html',
  styleUrls: ['./book-read-all.component.css']
})
export class BookReadAllComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'books', 'actions'];

  constructor() { }

  ngOnInit(): void {
  }

}
