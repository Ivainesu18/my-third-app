import { Component, OnInit } from '@angular/core';
import{Order}from'../order.model';

@Component({
  selector: 'app-orderslist',
  templateUrl: './orderslist.component.html',
  styleUrls: ['./orderslist.component.css']
})
export class OrderslistComponent implements OnInit {
   orders:Order[] =[
     new Order('FirstOrder',5)
   ];
  constructor() { }

  ngOnInit(): void {
  }

}
