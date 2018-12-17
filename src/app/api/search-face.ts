import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { SearchFaceResponse } from "../../pages/search/data-layer/search-face-response";

export interface BodyRequest {
    api_key: string;
    api_secret: string;
    faceset_token: string;
    image_base64: string;
}

@Injectable()
export class SearchFace {

    private key = 'ty0l5GTF5Dllxt5qtmoXkLxBHtKrckIZ';
    private secret = '-OLAkqud-QrK2fkpyU17YKiK5EfAexxu';
    private faceSetToken = '33ba61e6cc9c49628f452b3869344a56';

    constructor(private http: HttpClient) { }

    call(image: string): Observable<SearchFaceResponse> {
        const url = 'https://api-us.faceplusplus.com/facepp/v3/search';

        const header = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        })

        return this.http.post<SearchFaceResponse>(url,
            this.getFormUrlEncoded({
                api_key: this.key,
                api_secret: this.secret,
                faceset_token: this.faceSetToken,
                image_base64: image
            }), { headers: header }
        )
    }

    private getFormUrlEncoded(toConvert: BodyRequest): string {
        const formBody = [];
        for (const property in toConvert) {
            const encodedKey = encodeURIComponent(property);
            const encodedValue = encodeURIComponent(toConvert[property]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        return formBody.join('&');
    }
}