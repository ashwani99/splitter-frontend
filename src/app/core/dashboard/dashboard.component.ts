import { Component, OnInit } from '@angular/core';
import { Bill } from '../models/bill';
import { AuthService } from '../../services/auth.service';
import { BillService } from '../services/bill.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  bills: Array<Bill>;
  constructor(private billService: BillService) {}

  ngOnInit() {
    this.getBills();
  }

  getBills(): void {
    this.billService.getBills()
      .subscribe(bills => this.bills = bills);
  }

  // bills: Array<Bill> = [
  //   new Bill('Random Trip', 'This was an awesome trip with 3 friends'),
  //   new Bill('Dinner at Restaurant', 'No interest to cook at home'),
  //   new Bill('Lorem Ipsum', 'lol lol helo lol'),
  //   new Bill('Random Trip', 'This was an awesome trip with 3 friends'),
  //   new Bill('Dinner at Restaurant', 'No interest to cook at home'),
  //   new Bill('Lorem Ipsum', 'lol lol helo lol'),
  //   new Bill('Random Trip', 'This was an awesome trip with 3 friends'),
  //   new Bill('Dinner at Restaurant', 'No interest to cook at home'),
  //   new Bill('Lorem Ipsum', 'lol lol helo lol'),
  // ];

}
