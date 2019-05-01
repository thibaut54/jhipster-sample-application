/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { LibTestModule } from '../../../test.module';
import { UsersDeleteDialogComponent } from 'app/entities/users/users-delete-dialog.component';
import { UsersService } from 'app/entities/users/users.service';

describe('Component Tests', () => {
    describe('Users Management Delete Component', () => {
        let comp: UsersDeleteDialogComponent;
        let fixture: ComponentFixture<UsersDeleteDialogComponent>;
        let service: UsersService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [LibTestModule],
                declarations: [UsersDeleteDialogComponent]
            })
                .overrideTemplate(UsersDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(UsersDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(UsersService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});
