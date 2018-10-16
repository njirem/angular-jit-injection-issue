import { Component, Injectable } from '@angular/core';
import { Parent } from './working';

@Injectable()
export class BrokenService extends Parent { }

@Component({
    template: '<h1>{{ injected.prop }}</h1>',
})
export class BrokenComponent extends Parent { }
