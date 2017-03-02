import { Component, OnInit } from '@angular/core';
import { RetrieverService } from '../retriever.service';

@Component({
  selector: 'app-entry-list',
  template: `
  <h1> Phone list </h1>
  <div>
    <div *ngFor="let entry of entries">
      <h3> {{ entry.title }} </h3>
      <p> {{ entry.content }} </p>
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
