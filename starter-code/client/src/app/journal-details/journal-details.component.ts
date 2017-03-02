import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RetrieverService } from '../retriever.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-journal-details',
  template: `
    <h1> Entry details </h1>
    <a [routerLink]="['']"> Back to list </a>

      <div class="entry-info">
        <h2> {{ entry.title }}&nbsp;</h2>
        <h3> {{ entry.date }} </h3>
        <p> {{ entry.content }} </p>
      </div>
  `,
  providers: [RetrieverService]
})
export class JournalDetailsComponent implements OnInit {
  entry = {};

  constructor(
    private route: ActivatedRoute,
    private retriever: RetrieverService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(this.getEntryDetails(params['id']));
    });
  }

  getEntryDetails(id) {
    this.retriever.get(id)
      .subscribe((entryId) => {
        this.entry = entryId;
      });
  }
}
