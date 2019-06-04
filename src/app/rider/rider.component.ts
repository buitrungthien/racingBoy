import { Component, OnInit } from '@angular/core';
import { racingBoyService } from '../racingBoy.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-raider',
    templateUrl: './rider.component.html',
    styleUrls: ['./rider.component.css']
})
export class RiderComponent implements OnInit {
    rider: {};
    detailBtnIsCliked = false;

    constructor(private riderService: racingBoyService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.getDriver();
    }

    getDriver() {
        this.riderService.getRider(this.route.snapshot.params['id'])
            .subscribe((res: {}) => {
                const fetchedDriver = res['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'][0];
                this.rider = {
                    id: fetchedDriver['Driver']['driverId'],
                    fullName: `${fetchedDriver['Driver']['givenName']} ${fetchedDriver['Driver']['familyName']}`,
                    nationality: fetchedDriver['Driver']['nationality'],
                    team: fetchedDriver['Constructors'][0]['name'],
                    dateOfBirth: fetchedDriver['Driver']['dateOfBirth']
                };
            });
    }

    goToDetail() {
        this.detailBtnIsCliked = true;
        // this.router.navigate(['detail'], { relativeTo: this.route });
        this.router.navigate(['/riders', this.rider['id'], 'detail']);
    }

}
