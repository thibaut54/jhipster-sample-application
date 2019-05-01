/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { LibTestModule } from '../../../test.module';
import { LibraryDetailComponent } from 'app/entities/library/library-detail.component';
import { Library } from 'app/shared/model/library.model';

describe('Component Tests', () => {
    describe('Library Management Detail Component', () => {
        let comp: LibraryDetailComponent;
        let fixture: ComponentFixture<LibraryDetailComponent>;
        const route = ({ data: of({ library: new Library(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [LibTestModule],
                declarations: [LibraryDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(LibraryDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(LibraryDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.library).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
