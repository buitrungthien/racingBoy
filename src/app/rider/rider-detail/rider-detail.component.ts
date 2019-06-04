import { Component, OnInit } from '@angular/core';
import { racingBoyService } from '../../racingBoy.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-raider-detail',
    templateUrl: './rider-detail.component.html',
    styleUrls: ['./rider-detail.component.css']
})
export class RiderDetailComponent implements OnInit {
    public detail: {};

    constructor(private riderDetail: racingBoyService,
                private route: ActivatedRoute
                ) { }

    ngOnInit() {
        this.riderDetail.getRiderDetail(this.route.parent.params['_value']['id'])
            .subscribe(res => {
                const races = res['MRData']['RaceTable']['Races'];
                this.detail = races.map(race => {
                    return {
                        round: race.round,
                        grandPrix: race.raceName,
                        team: race.Results[0].Constructor.name,
                        grid: race.Results[0].grid,
                        race: race.Results[0].position
                    }
                });
            });
    }

}
