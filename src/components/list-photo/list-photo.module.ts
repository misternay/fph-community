import { NgModule } from "@angular/core";
import { ListPhotoComponent } from "./list-photo";
import { IonicPageModule } from "ionic-angular";

@NgModule({
    declarations: [
        ListPhotoComponent,
    ],
    imports: [
        IonicPageModule.forChild(ListPhotoComponent)
    ],
    exports: [
        ListPhotoComponent
    ]
})
export class ListPhotoComponentModule { }