
export class EmployeeObject {
  id?:string;
  firstName: string;
  lastName: string;
  age: number;
  experience?:string;
  phone?: bigint;
  streetAdress?: string;
  city?: string;
  state?:string;
  zipcode?: string;
  workingDays?: number;
  joinDate?: Date;

}

export interface ClientDetails {
  map : Map<string, Map<string, string>> ;
  //[id: string]: any;
  //clientDetailsFound:boolean;
}