import { Component } from '@angular/core';
import { IBill } from 'src/app/interface/bill';
import { BillService } from 'src/app/services/bill.service';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-bill-manage',
  templateUrl: './bill-manage.component.html',
  styleUrls: ['./bill-manage.component.css']
})
export class BillManageComponent {
  statusList: { id: number, name: string }[] = []
  bills: IBill[] = []

  constructor(private billService: BillService, private statusService: StatusService) { }

  ngOnInit() {
    this.getBillList();
    this.getStatus();
  }

  getBillList() {
    this.billService.getBills().subscribe(
      (data) => {
        this.bills = data;
      }
    )
  }

  getStatus() {
    this.statusService.getStatus().subscribe(
      (data) => {
        this.statusList = data;
      }
    )
  }

  getTotalQuantity(bill: IBill): number {
    return bill.items.reduce((total, item) => total + item.quantity, 0);
  }
  updateBillStatus(bill: IBill): void {
    // Ép kiểu giá trị trường status thành số
    bill.status = Number(bill.status);

    this.billService.updateBill(bill.id, bill).subscribe(
      (updatedBill) => {
        console.log('Bill status updated successfully:', updatedBill);
      },
      (error) => {
        console.error('Error updating bill status:', error);
        // Xử lý lỗi theo cách phù hợp
      }
    );
  }
}
