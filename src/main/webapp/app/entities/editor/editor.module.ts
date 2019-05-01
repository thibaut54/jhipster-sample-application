import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LibSharedModule } from 'app/shared';
import {
    EditorComponent,
    EditorDetailComponent,
    EditorUpdateComponent,
    EditorDeletePopupComponent,
    EditorDeleteDialogComponent,
    editorRoute,
    editorPopupRoute
} from './';

const ENTITY_STATES = [...editorRoute, ...editorPopupRoute];

@NgModule({
    imports: [LibSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [EditorComponent, EditorDetailComponent, EditorUpdateComponent, EditorDeleteDialogComponent, EditorDeletePopupComponent],
    entryComponents: [EditorComponent, EditorUpdateComponent, EditorDeleteDialogComponent, EditorDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LibEditorModule {}
