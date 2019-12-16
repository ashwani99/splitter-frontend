import { Component, OnInit, Input } from '@angular/core';
import { Bill } from '../models/bill';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() bill: Bill;

}
