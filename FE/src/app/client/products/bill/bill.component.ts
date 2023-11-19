import { Component } from '@angular/core';
import { IBill } from 'src/app/interface/bill';
import { BillService } from 'src/app/services/bill.service';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent {
  statusList: { id: number, name: string }[] = []
  bills: IBill[] = []
  billByUser: IBill[] = []
  statusName: string = ""
  constructor(private billService: BillService, private statusService: StatusService) { }
  ngOnInit() {
    this.getBillList();
    this.getStatus()
  }
  getBillList() {
    this.billService.getBills().subscribe(
      (data) => {
        this.bills = data
        this.getBillByUID()
      }
    )
  }
  getBillByUID() {
    this.billByUser = this.bills.filter(bill => bill.id_user === String(localStorage.getItem("id")))
    console.log(this.billByUser);

  }
  getStatus() {
    this.statusService.getStatus().subscribe(
      (data) => {
        this.statusList = data
      }
    )
  }
 
  getStatusName(statusId: number): string {
    const status = this.statusList.find(status => status.id === statusId);
    return status ? status.name : 'Unknown'; 
  }

}
