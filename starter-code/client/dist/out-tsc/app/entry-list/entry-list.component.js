var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { RetrieverService } from '../retriever.service';
var EntryListComponent = (function () {
    function EntryListComponent(retriever) {
        this.retriever = retriever;
    }
    EntryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.retriever.getList()
            .subscribe(function (entries) {
            _this.entries = entries;
        });
    };
    return EntryListComponent;
}());
EntryListComponent = __decorate([
    Component({
        selector: 'app-entry-list',
        template: "\n  <h1> Journal Entries </h1>\n  <div>\n    <div *ngFor=\"let entry of entries\">\n      <h3> {{ entry.title }} </h3>\n      <p> {{ entry.date }} </p>\n      <p> {{ entry.content }} </p>\n      <p> {{entry._id}} </p>\n      <a [routerLink]=\"['journal-entries', entry._id]\"> View Details </a>\n    </div>\n  </div>\n",
        styleUrls: ['./entry-list.component.css']
    }),
    __metadata("design:paramtypes", [RetrieverService])
], EntryListComponent);
export { EntryListComponent };
//# sourceMappingURL=../../../../src/app/entry-list/entry-list.component.js.map