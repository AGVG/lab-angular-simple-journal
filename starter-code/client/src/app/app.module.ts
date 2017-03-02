import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { Routes } from '@angular/router';
import { RouterModule } from "@angular/router";
import { RetrieverService } from './retriever.service';

export const routes: Routes = [
    { path: '', component: EntryListComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RetrieverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
