import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { CaliHousing, PredictData } from '../shared/models/CaliHousing';
import { CALIHOUSING_D_URL, CALIHOUSING_INPUT_DT_URL, CALIHOUSING_INPUT_RFGS_URL, CALIHOUSING_INPUT_RFRD_URL, CALIHOUSING_INPUT_RF_URL, CALIHOUSING_INPUT_URL, CALIHOUSING_SAMPLE_DT_URL, CALIHOUSING_SAMPLE_RFGS_URL, CALIHOUSING_SAMPLE_RFRD_URL, CALIHOUSING_SAMPLE_RF_URL, CALIHOUSING_SAMPLE_URL } from '../shared/url';

const CALI_KEY = "CALIHOUSING";

export interface Dataset {
    Dataset: string[]
}

@Injectable({
    providedIn: 'root'
})

export class CaliHousingService {

    private caliSubject = new BehaviorSubject<CaliHousing>(this.getCaliFromLocalStorage());

    public caliObservable: Observable<CaliHousing>;

    constructor(private http: HttpClient) {
        this.caliObservable = this.caliSubject.asObservable();
    }

    getDataSample(): Observable<CaliHousing> {
        return this.http.get<CaliHousing>(CALIHOUSING_SAMPLE_URL).pipe(
            tap({
                next: (cali) => {
                    this.setCaliToLocalStorage(cali);
                    this.caliSubject.next(cali);
                },
                error: (errorResponse) => {
                    console.log(errorResponse);
                }
            })
        );
    }

    getDataSample2(): Observable<CaliHousing> {
        return this.http.get<CaliHousing>(CALIHOUSING_SAMPLE_DT_URL).pipe(
            tap({
                next: (cali) => {
                    this.setCaliToLocalStorage(cali);
                    this.caliSubject.next(cali);
                },
                error: (errorResponse) => {
                    console.log(errorResponse);
                }
            })
        );
    }

    getDataSample3(): Observable<CaliHousing> {
        return this.http.get<CaliHousing>(CALIHOUSING_SAMPLE_RF_URL).pipe(
            tap({
                next: (cali) => {
                    this.setCaliToLocalStorage(cali);
                    this.caliSubject.next(cali);
                },
                error: (errorResponse) => {
                    console.log(errorResponse);
                }
            })
        );
    }

    getDataSample4(): Observable<CaliHousing> {
        return this.http.get<CaliHousing>(CALIHOUSING_SAMPLE_RFGS_URL).pipe(
            tap({
                next: (cali) => {
                    this.setCaliToLocalStorage(cali);
                    this.caliSubject.next(cali);
                },
                error: (errorResponse) => {
                    console.log(errorResponse);
                }
            })
        );
    }

    getDataSample5(): Observable<CaliHousing> {
        return this.http.get<CaliHousing>(CALIHOUSING_SAMPLE_RFRD_URL).pipe(
            tap({
                next: (cali) => {
                    this.setCaliToLocalStorage(cali);
                    this.caliSubject.next(cali);
                },
                error: (errorResponse) => {
                    console.log(errorResponse);
                }
            })
        );
    }

    getPredict(data: PredictData): Observable<string>{
        return this.http.post<any>(CALIHOUSING_INPUT_URL, data).pipe (
            tap({
                next: (REL) => {
                    localStorage.setItem('PREDICT_VALUE' , REL);
                },
                error: (errorResponse) => {
                    console.log(errorResponse);
                }
            })
        )
    }
    getPredict2(data: PredictData): Observable<string>{
        return this.http.post<any>(CALIHOUSING_INPUT_DT_URL, data).pipe (
            tap({
                next: (REL) => {
                    localStorage.setItem('PREDICT_VALUE' , REL);
                },
                error: (errorResponse) => {
                    console.log(errorResponse);
                }
            })
        )
    }
    getPredict3(data: PredictData): Observable<string>{
        return this.http.post<any>(CALIHOUSING_INPUT_RF_URL, data).pipe (
            tap({
                next: (REL) => {
                    localStorage.setItem('PREDICT_VALUE' , REL);
                },
                error: (errorResponse) => {
                    console.log(errorResponse);
                }
            })
        )
    }
    getPredict4(data: PredictData): Observable<string>{
        return this.http.post<any>(CALIHOUSING_INPUT_RFGS_URL, data).pipe (
            tap({
                next: (REL) => {
                    localStorage.setItem('PREDICT_VALUE' , REL);
                },
                error: (errorResponse) => {
                    console.log(errorResponse);
                }
            })
        )
    }
    getPredict5(data: PredictData): Observable<string>{
        return this.http.post<any>(CALIHOUSING_INPUT_RFRD_URL, data).pipe (
            tap({
                next: (REL) => {
                    localStorage.setItem('PREDICT_VALUE' , REL);
                },
                error: (errorResponse) => {
                    console.log(errorResponse);
                }
            })
        )
    }

    getDataset(): Observable<Dataset>{
        return this.http.get<Dataset>(CALIHOUSING_D_URL);
    }
    private setCaliToLocalStorage(data: CaliHousing) {
        localStorage.setItem(CALI_KEY, JSON.stringify(data));
    }

    private getCaliFromLocalStorage(): CaliHousing {
        const userJson = localStorage.getItem(CALI_KEY);
        if (userJson) return JSON.parse(userJson) as CaliHousing;
        return new CaliHousing();
    }
}
