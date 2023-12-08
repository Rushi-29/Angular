import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LibraryServiceService } from 'src/app/service/library-service.service';
import { UserServiceService } from 'src/app/service/userService/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-table',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UserTableComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;

  displayedColumns: string[] = ['userId', 'name', 'email', 'gender', 'birthDate', 'length', 'courses'];

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userService: UserServiceService, private libService: LibraryServiceService, private router: Router) { }

  deleteRow(user: any) {
    this.userService.deleteUser(user).subscribe(() => {
      // "User Deleted" is a comment and doesn't perform any action. You may want to show a success message.
      Swal.fire("User Deleted Successfully...!!!");
      
      this.refreshTable();

    });
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(users => {
      this.dataSource = new MatTableDataSource(users);
      this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    });
    
  }

  applyFilter(filterValue: any): void {
    this.dataSource.filter = filterValue?.target?.value.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private refreshTable(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.dataSource.data = users; // Update the data directly
    });
  }
}
