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
import { ActivatedRoute } from '@angular/router';
import { RetrieverService } from '../retriever.service';
var JournalDetailsComponent = (function () {
    function JournalDetailsComponent(route, retriever) {
        this.route = route;
        this.retriever = retriever;
        this.entry = {};
    }
    JournalDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log(_this.getEntryDetails(params['id']));
        });
    };
    JournalDetailsComponent.prototype.getEntryDetails = function (id) {
        var _this = this;
        this.retriever.get(id)
            .subscribe(function (entryId) {
            _this.entry = entryId;
        });
    };
    return JournalDetailsComponent;
}());
JournalDetailsComponent = __decorate([
    Component({
        selector: 'app-journal-details',
        template: "\n    <h1> Entry details </h1>\n    <a [routerLink]=\"['']\"> Back to list </a>\n\n      <div class=\"entry-info\">\n        <h2> {{ entry.title }}&nbsp;</h2>\n        <h3> {{ entry.date }} </h3>\n        <p> {{ entry.content }} </p>\n      </div>\n  ",
        providers: [RetrieverService]
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        RetrieverService])
], JournalDetailsComponent);
export { JournalDetailsComponent };
//# sourceMappingURL=../../../../src/app/journal-details/journal-details.component.js.map