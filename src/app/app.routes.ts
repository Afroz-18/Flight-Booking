import { Routes } from '@angular/router';
import { SearchComponent } from './website/search/search.component';
import { BookFlightComponent } from './website/book-flight/book-flight.component';
import { MyBookingsComponent } from './website/my-bookings/my-bookings.component';
import { LayoutComponent } from './Admin/layout/layout.component';
import { AirportComponent } from './Admin/airport/airport.component';
import { FlightsComponent } from './Admin/flights/flights.component';
import { CityComponent } from './Admin/city/city.component';
import { NewFlightComponent } from './Admin/new-flight/new-flight.component';
import { LoginComponent } from './Admin/login/login.component';

export const routes: Routes = [
    {path:'', redirectTo:'search', pathMatch:'full'},
    
    { path:'search', component:SearchComponent, title:"Search Flight"},

    { path:'book-flight', component:BookFlightComponent, title:"Book New Ticket"},

    { path:'bookings', component:MyBookingsComponent, title:"My Bookings"},

    {path:'login', component:LoginComponent},

    { path: '', component:LayoutComponent,
        children:[
            {path:'airport', component:AirportComponent},

            {path:'all-flights', component:FlightsComponent},

            {path:'city', component:CityComponent},

            {path:'new-flight', component:NewFlightComponent}

        ]
    }
];
