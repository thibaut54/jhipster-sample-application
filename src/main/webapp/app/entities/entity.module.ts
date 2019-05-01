import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'library',
                loadChildren: './library/library.module#LibLibraryModule'
            },
            {
                path: 'book',
                loadChildren: './book/book.module#LibBookModule'
            },
            {
                path: 'category',
                loadChildren: './category/category.module#LibCategoryModule'
            },
            {
                path: 'author',
                loadChildren: './author/author.module#LibAuthorModule'
            },
            {
                path: 'coordinates',
                loadChildren: './coordinates/coordinates.module#LibCoordinatesModule'
            },
            {
                path: 'editor',
                loadChildren: './editor/editor.module#LibEditorModule'
            },
            {
                path: 'loan',
                loadChildren: './loan/loan.module#LibLoanModule'
            },
            {
                path: 'role',
                loadChildren: './role/role.module#LibRoleModule'
            },
            {
                path: 'users',
                loadChildren: './users/users.module#LibUsersModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LibEntityModule {}
