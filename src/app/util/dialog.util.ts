import { Injectable } from "@angular/core";
import { DialogConfig } from "./dialog.config.util";
import { LoadingController } from "ionic-angular";

@Injectable()
export class DialogUtilService {

    constructor(
        private loadingCtrl: LoadingController,
    ) { }

    showLoadingDialog() {
        if (DialogConfig.isShowLoading) return;
        DialogConfig.isShowLoading = true;

        DialogConfig.loading = this.loadingCtrl.create({
            spinner: "hide",
            content: `
                  <div class="spinner-dot">
                    <div class="dot1"></div>
                    <div class="dot2"></div>
                  </div>
                `
        });
        DialogConfig.loading.present();
    }

    hideLoadingDialog(): Promise<boolean> {
        return new Promise(resolve => {
            if (DialogConfig.isShowLoading) {
                DialogConfig.loading.dismissAll();
                DialogConfig.isShowLoading = false;
                resolve(true);
            }
            resolve(false);
        });
    }
}
