import { Component, Injectable } from '@angular/core';
import { SomeService } from './some.service';

@Injectable()
export class Parent {
    constructor(readonly injected: SomeService) { }
}

@Injectable()
export class WorkingService extends Parent { }

@Component({
    template: '<h1>{{ injected.prop }}</h1>',
})
export class WorkingComponent extends Parent { }
