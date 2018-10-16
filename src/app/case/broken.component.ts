import { Parent } from './working.component';
import { Component } from '@angular/core';

@Component({
    template: '<h1>{{ injected.prop }}</h1>',
})
export class BrokenComponent extends Parent { }
