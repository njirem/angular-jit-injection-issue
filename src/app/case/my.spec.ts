import { TestBed, async } from '@angular/core/testing';
import { BrokenComponent } from './broken.component';
import { WorkingComponent } from './working.component';
import { SomeService } from './some.service';

describe('when a component inherits from another class', () => {
    let injectedService: SomeService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [SomeService],
            declarations: [BrokenComponent, WorkingComponent],
        }).compileComponents();
        injectedService = TestBed.get(SomeService);
    }));

    describe('in the same file', () => {
        it('should inject the service declared by the superclass', () => {
            const fixture = TestBed.createComponent(WorkingComponent);
            expect(fixture.componentInstance.injected).toBeTruthy();
            expect(fixture.componentInstance.injected).toBe(injectedService);
            // This works as expected.
        });
    });

    describe('in separate files', () => {
        it('should inject the service declared by the superclass', () => {
            const fixture = TestBed.createComponent(BrokenComponent);
            expect(fixture.componentInstance.injected).toBeTruthy();
            expect(fixture.componentInstance.injected).toBe(injectedService);
            // This fails.
        });
    });
});
