import { Component, Injectable } from '@angular/core';
import { SomeService } from './some.service';

@Injectable()
export class Parent {
    constructor(readonly injected: SomeService) { }
}

@Component({
    template: '<h1>{{ injected.prop }}</h1>',
})
export class WorkingComponent extends Parent { }
