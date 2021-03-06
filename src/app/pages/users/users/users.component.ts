import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from './../../services/users.service';
import {MatPaginator, MatTableDataSource, MatDialog} from '@angular/material';
import { PeriodicElement } from '../../models/periodicElement';
import { UserTicketComponent } from './../user-ticket/user-ticket.component';
import { ConfirmComponent } from './../../shared/confirm/confirm.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['Nome', 'Sobrenome', 'ticket', 'update', 'delete'];
  dataSource;
  total: number;
  pageIndex = 1;
  perPage: number;
  page = 1;
  last_page: number;
  splicedData;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private usersService: UsersService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.list();
  }

  public list(): void {
    this.usersService.list()
      .subscribe(resp => {
        this.dataSource = new MatTableDataSource<PeriodicElement>(resp as any);
        this.dataSource.paginator = this.paginator;
        this.total = resp.length;
      });
  }

  public showModalTicket(user_id: number): void {
    this.dialog.open(UserTicketComponent, {
      width: '500px',
      data: {user_id: user_id}
    });
  }

  public delete(user_id: number): void {
    this.dialog.open(ConfirmComponent, {
      width: '300px',
      data: {user_id: user_id}
    })
    .afterClosed()
    .subscribe(resp => {
      if (resp) {
        this.list();
      }
    });
  }
}
