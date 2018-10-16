import { TestBed, async } from '@angular/core/testing';
import { BrokenChildComponent } from './child.component';
import { WorkingChildComponent } from './both.components';
import { SomeService } from './some.service';

fdescribe('Issue', () => {
    describe('BrokenComponent', () => {
        beforeEach(async(() => {
            TestBed.configureTestingModule({
                providers: [SomeService],
                declarations: [BrokenChildComponent],
            }).compileComponents();
        }));

        it('should be able to create the component', () => {
            const fixture = TestBed.createComponent(BrokenChildComponent);
            expect(fixture.componentInstance.injected.prop).toBeTruthy();
        });
    });

    describe('WorkingComponent', () => {
        beforeEach(async(() => {
            TestBed.configureTestingModule({
                providers: [SomeService],
                declarations: [WorkingChildComponent],
            }).compileComponents();
        }));

        it('should be able to create the component', () => {
            const fixture = TestBed.createComponent(WorkingChildComponent);
            expect(fixture.componentInstance.injected.prop).toBeTruthy();
        });
    });
});
