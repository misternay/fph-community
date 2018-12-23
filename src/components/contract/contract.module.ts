import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ContractComponent } from "./contract";

@NgModule({
    declarations: [
        ContractComponent,
    ],
    imports: [
        IonicPageModule.forChild(ContractComponent)
    ],
    exports: [
        ContractComponent
    ]
})
export class ContractComponentModule { }