import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Library } from 'app/shared/model/library.model';
import { LibraryService } from './library.service';
import { LibraryComponent } from './library.component';
import { LibraryDetailComponent } from './library-detail.component';
import { LibraryUpdateComponent } from './library-update.component';
import { LibraryDeletePopupComponent } from './library-delete-dialog.component';
import { ILibrary } from 'app/shared/model/library.model';

@Injectable({ providedIn: 'root' })
export class LibraryResolve implements Resolve<ILibrary> {
    constructor(private service: LibraryService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ILibrary> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<Library>) => response.ok),
                map((library: HttpResponse<Library>) => library.body)
            );
        }
        return of(new Library());
    }
}

export const libraryRoute: Routes = [
    {
        path: '',
        component: LibraryComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Libraries'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/view',
        component: LibraryDetailComponent,
        resolve: {
            library: LibraryResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Libraries'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'new',
        component: LibraryUpdateComponent,
        resolve: {
            library: LibraryResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Libraries'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/edit',
        component: LibraryUpdateComponent,
        resolve: {
            library: LibraryResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Libraries'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const libraryPopupRoute: Routes = [
    {
        path: ':id/delete',
        component: LibraryDeletePopupComponent,
        resolve: {
            library: LibraryResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Libraries'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
