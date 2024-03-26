import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Flight } from "./flight";

@Injectable({ providedIn: 'root' })

export class FlightService {
    private apiServerUrl = '';

    constructor(private http: HttpClient) { }

    public getAllFlights(): Observable<Flight[]> {
        return this.http.get<Flight[]>(`${this.apiServerUrl}/flight/getAllFlights`);
    }

    public saveUser(flight: Flight): Observable<Flight> {
        return this.http.post<Flight>(`${this.apiServerUrl}/flight/saveFlight`,flight);
    }
    
    public getFlightsByDeparture(city: string): Observable<Flight[]> {
        return this.http.get<Flight[]>(`${this.apiServerUrl}/flight/from=${city}`);
    }

    public getFlightsByDestination(city: string): Observable<Flight[]> {
        return this.http.get<Flight[]>(`${this.apiServerUrl}/flight/to=${city}`);
    }
    public getFlightsWithNoStops(): Observable<Flight[]> {
        return this.http.get<Flight[]>(`${this.apiServerUrl}/flight/stops=0`);
    }
    public cancelFlight(id: bigint): Observable<Flight> {
        return this.http.delete<Flight>(`${this.apiServerUrl}/flight/cancel/${id}`);
    }

}