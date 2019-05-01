import { NgModule } from '@angular/core';

import { LibSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [LibSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [LibSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class LibSharedCommonModule {}
