import { Component } from '@angular/core';
import { SomeService } from './some.service';

@Component({})
export class ParentComponent {
    constructor(readonly injected: SomeService) {}
}

@Component({
    template: '<h1>{{ injected.Prop }}</h1>',
 })
export class WorkingChildComponent extends ParentComponent {}
