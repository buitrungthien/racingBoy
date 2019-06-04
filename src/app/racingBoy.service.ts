import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class racingBoyService {

    constructor(private http: HttpClient) {}

    getAllRacingBoys() {
        return this.http.get('http://ergast.com/api/f1/2013/driverStandings.json');
    }

    getRider(id: string) {
        return this.http.get(`http://ergast.com/api/f1/2013/drivers/${id}/driverStandings.json`);
    }

    getRiderDetail(id:string) {
        return this.http.get(`http://ergast.com/api/f1/2013/drivers/${id}/results.json`);
    }
}