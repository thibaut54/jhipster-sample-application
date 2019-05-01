import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LibSharedModule } from 'app/shared';
import {
    CoordinatesComponent,
    CoordinatesDetailComponent,
    CoordinatesUpdateComponent,
    CoordinatesDeletePopupComponent,
    CoordinatesDeleteDialogComponent,
    coordinatesRoute,
    coordinatesPopupRoute
} from './';

const ENTITY_STATES = [...coordinatesRoute, ...coordinatesPopupRoute];

@NgModule({
    imports: [LibSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        CoordinatesComponent,
        CoordinatesDetailComponent,
        CoordinatesUpdateComponent,
        CoordinatesDeleteDialogComponent,
        CoordinatesDeletePopupComponent
    ],
    entryComponents: [CoordinatesComponent, CoordinatesUpdateComponent, CoordinatesDeleteDialogComponent, CoordinatesDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LibCoordinatesModule {}
