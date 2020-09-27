import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  dataSource = [];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'createdDate'];
  constructor(private accSer: AccountsService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.accSer.getUsers().pipe(first())
    .subscribe(
        data => {
           console.log(data);
          this.dataSource = data;
        },
        error => {
           console.log(error);

        });
  }
}
