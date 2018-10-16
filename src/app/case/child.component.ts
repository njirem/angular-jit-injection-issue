import { ParentComponent } from './both.components';
import { Component } from '@angular/core';

@Component({
    template: '<h1>{{ injected.Prop }}</h1>',
 })
export class BrokenChildComponent extends ParentComponent {}
