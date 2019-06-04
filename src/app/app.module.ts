import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { racingBoyService } from './racingBoy.service';
import { FilterPipe } from './filter.pipe';
import { HomepageComponent } from './homepage/homepage.component';
import { Routes, RouterModule } from '@angular/router';
import { RiderComponent } from './rider/rider.component';
import { RiderDetailComponent } from './rider/rider-detail/rider-detail.component';
import { SortPipe } from './sort.pipe';

const appRoutes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'riders/:id', component: RiderComponent, children: [
        { path : 'detail', component: RiderDetailComponent}
    ]}
];

@NgModule({
    declarations: [
        AppComponent,
        FilterPipe,
        HomepageComponent,
        RiderComponent,
        RiderDetailComponent,
        SortPipe
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [racingBoyService],
    bootstrap: [AppComponent]
})
export class AppModule { }
