import {Component, NgModule, ViewChild} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormControl, FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular ng-select <small class="text-muted"><a target="_blank" href="https://github.com/ng-select/ng-select">Open in Github</a></small></h1>
        <ng-select
            [items]="companies"
            [multiple]="true"
            bindLabel="name"
            bindValue="id"
            placeholder="All companies">
            <ng-template ng-multi-label-tmp let-items="items" let-clear="clear">
                <span class="ng-value">{{ items.length }} companies</span>
            </ng-template>
            <ng-template ng-option-tmp let-item="item" let-item$="item$" let-index="index">
              <label class="ng-checkbox-container">
                <input id="item-{{index}}" type="checkbox" [ngModel]="item$.selected">
                <span class="checkmark"></span>
              </label>
              <div class="ng-value-container">
                <span class="ng-value">{{item.name}}</span>
              </div>
            </ng-template>
        </ng-select>
`
})
export class AppComponent {

    companies = [
        {id: 1, name: 'Company 1'},
        {id: 2, name: 'Company 2'},
        {id: 3, name: 'Company 3'},
        {id: 4, name: 'Company 4'},
        {id: 5, name: 'Company 5'},
        {id: 1, name: 'Company 1'},
        {id: 2, name: 'Company 2'},
        {id: 3, name: 'Company 3'},
        {id: 4, name: 'Company 4'},
        {id: 5, name: 'Company 5'},
        {id: 1, name: 'Company 1'},
        {id: 2, name: 'Company 2'},
        {id: 3, name: 'Company 3'},
        {id: 4, name: 'Company 4'},
        {id: 5, name: 'Company 5'},
        {id: 1, name: 'Company 1'},
        {id: 2, name: 'Company 2'},
        {id: 3, name: 'Company 3'},
        {id: 4, name: 'Company 4'},
        {id: 5, name: 'Company 5'},
        {id: 1, name: 'Company 1'},
        {id: 2, name: 'Company 2'},
        {id: 3, name: 'Company 3'},
        {id: 4, name: 'Company 4'},
        {id: 5, name: 'Company 5'},
        {id: 1, name: 'Company 1'},
        {id: 2, name: 'Company 2'},
        {id: 3, name: 'Company 3'},
        {id: 4, name: 'Company 4'},
        {id: 5, name: 'Company 5'},
        {id: 1, name: 'Company 1'},
        {id: 2, name: 'Company 2'},
        {id: 3, name: 'Company 3'},
        {id: 4, name: 'Company 4'},
        {id: 5, name: 'Company 5'}
    ];
}
