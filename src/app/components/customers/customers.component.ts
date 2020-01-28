import { Component, OnInit } from "@angular/core";
import { CustomersService } from "../../services/customers.service";
import { Customer } from "../../models/customer";
import * as _ from "lodash";

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.css"]
})
export class CustomersComponent implements OnInit {
  headerTitle: string;
  headerIcon: string;
  headerDescription: string;
  customers: Array<Customer> = [];
  customersCash: Array<Customer> = [];
  term: string = "";
  constructor(private customersService: CustomersService) {}

  ngOnInit(): void {
    this.headerTitle = "Customers Page";
    this.headerIcon = "fas fa-user";
    this.headerDescription = "View Company";
    this.customersService
      .getCustomers()
      .subscribe(
        customers => (this.customers = this.customersCash = customers)
      );
  }
  onClickDeleteCustomer(
    customerId: string,
    firstName: string,
    event: any
  ): void {
    event.preventDefault();
    if (confirm(`Are you sure you want to delete ${firstName} customer?`)) {
      this.customersService.deleteCustomer(customerId);
    }
  }
  onInputTerm(): void {
    let term = this.term.trim();

    if (term.length > 0) {
      this.customers = this.customersCash.filter(customer =>
        _.includes(customer.phone, term)
      );
    } else {
      this.customers = this.customersCash;
    }
  }
}
