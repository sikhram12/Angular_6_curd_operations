
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Subject, Observable, throwError, BehaviorSubject } from 'rxjs';
import { EmployeeObject, ClientDetails, UserLogin } from './employee/employee';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class AppService {
         
    constructor(private readonly http: HttpClient) {  }

    getAllEmployesList() {
        return this.http.get<EmployeeObject[]>("http://localhost:8080/demo/employee/getAllEmployesList", httpOptions);
    }

    updateEmployee(req: EmployeeObject) {
        return this.http.post<EmployeeObject>("http://localhost:8080/demo/employee/updateEmployee", req , httpOptions);
    }

    createNewEmployee(req: EmployeeObject) {
        return this.http.post<EmployeeObject>("http://localhost:8080/demo/employee/createNewEmployee", req , httpOptions);
    }

    deleteEmployee(id: string) {
        return this.http.get<string>("http://localhost:8080/demo/employee/deleteEmployee/"+id);
    }

    stateWithCities() {
        return this.http.get<ClientDetails>("http://localhost:8080/demo/employee/stateWithCities");
    }

    login(req : UserLogin) {
        return this.http.post<string>("http://localhost:8080/demo/employee/login", req, {responseType: 'text' as 'json' });
    }

    // getMetadataFields() {
    //     return this.http.get<MetadataObject[]>(endpoints.getMetadataFields, httpOptions);
    // }

    // getAgencyTree(roles?: any) {
    //     if (roles === undefined) {
    //         roles = 'ignore'
    //     }
    //     return this.http.post<AgencyTree[]>(endpoints.getAgencyTree, roles, httpOptions);
    // }

    // getUserInfo(req: any) {
    //     if (req.application === 'LTC') {
    //         req.application = 'E&E'
    //     }
    //     return this.http.post<UserDetail>(endpoints.userDetailEndpoint, req);
    // }

  
    

   
}