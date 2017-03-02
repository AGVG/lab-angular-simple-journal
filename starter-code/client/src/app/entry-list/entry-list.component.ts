import { Component, OnInit } from '@angular/core';
import { RetrieverService } from '../retriever.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry-list',
  template: `
  <h1> Journal Entries </h1>
  <div>
    <div *ngFor="let entry of entries">
      <h3> {{ entry.title }} </h3>
      <p> {{ entry.date }} </p>
      <p> {{ entry.content }} </p>
      <p> {{entry._id}} </p>
      <a [routerLink]="['journal-entries', entry._id]"> View Details </a>
    </div>
  </div>
`,
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  entries;

  constructor(private retriever: RetrieverService) { }

  ngOnInit() {
    this.retriever.getList()
      .subscribe((entries) => {
        this.entries = entries;
      });
  }

}
