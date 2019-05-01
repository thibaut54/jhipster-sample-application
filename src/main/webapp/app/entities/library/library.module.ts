import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LibSharedModule } from 'app/shared';
import {
    LibraryComponent,
    LibraryDetailComponent,
    LibraryUpdateComponent,
    LibraryDeletePopupComponent,
    LibraryDeleteDialogComponent,
    libraryRoute,
    libraryPopupRoute
} from './';

const ENTITY_STATES = [...libraryRoute, ...libraryPopupRoute];

@NgModule({
    imports: [LibSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        LibraryComponent,
        LibraryDetailComponent,
        LibraryUpdateComponent,
        LibraryDeleteDialogComponent,
        LibraryDeletePopupComponent
    ],
    entryComponents: [LibraryComponent, LibraryUpdateComponent, LibraryDeleteDialogComponent, LibraryDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LibLibraryModule {}
