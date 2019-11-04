import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MatPaginator, MatSort, MatDialogConfig } from '@angular/material';
import { AppService } from '../app.service';
import { EmployeeObject } from './employee';
import { AddComponent } from '../dialogs/add/add.component';
import { EditComponent } from '../dialogs/edit/edit.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  empObj: EmployeeObject;
  dataSource = new MatTableDataSource<EmployeeObject>();
  displayedColumns = ['id', 'firstName','lastName', 'age','experience', 'phone','streetAdress', 'city','state', 'zipcode','joinDate','actions', 'delete']
  dataService: any;
  exampleDatabase: AppService | null;
  result : any;

  constructor(private readonly appService: AppService,  public dialog: MatDialog,) {
    
  }

  ngOnInit() {
    this.appService.getAllEmployesList().subscribe(data=>{
      this.dataSource.data=[];
      data.forEach(row=>{
        this.dataSource.data.push(row)
      })
      this.dataSource.data=this.dataSource.data.sort();
      console.log(this.dataSource);
     });
  }

  addNew(obj?: EmployeeObject) {
    const dialogRef = this.dialog.open(AddComponent, {
      data: {obj: obj }
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data !== undefined && data !== '') {
      
       this.result = this.appService.createNewEmployee(data).subscribe(data=>{
         console.log(data)
       });
       
       dialogRef.close();
      //this.dataSource.data=this.dataSource.data.sort();
      }else{
        dialogRef.close();
    }
    });
  }

   edit(obj?: EmployeeObject) {
    console.log(obj.id)
    let mode ='Anil';
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      mode:mode,
      abc:obj
    };
    const dialogRef = this.dialog.open(EditComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(data => {
      if (data !== undefined && data !== '') {
      
       this.result = this.appService.updateEmployee(data).subscribe(data=>{
         console.log(data)
       });
       
       dialogRef.close();
      //this.dataSource.data=this.dataSource.data.sort();
      }else{
        dialogRef.close();
    }
    });
     
  }


  refreshTable() {
    throw new Error("Method not implemented.");
  }

  delete(obj: EmployeeObject){
    console.log('delete '+obj.id);
    this.appService.deleteEmployee(obj.id).subscribe(data=>{
      console.log(data)
      const index = this.dataSource.data.indexOf(obj);
      this.dataSource.data.splice(index, 1);
      this.dataSource.data = this.dataSource.data.sort();
    });

  }


}
