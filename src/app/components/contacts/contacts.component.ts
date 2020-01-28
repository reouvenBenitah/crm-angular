import { Component, OnInit } from "@angular/core";
import { Contact } from "../../models/contact";
import { ContactsService } from "../../services/contacts.service";
@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.css"]
})
export class ContactsComponent implements OnInit {
  headerTitle: string;
  headerIcon: string;
  headerDescription: string;
  contacts: Array<Contact>=[]; //all the element in array is Contact

  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {

    this.headerTitle = "Contact Page";
    this.headerIcon = "fas fa-envelope";
    this.headerDescription = "View Contact us";
    this.contactsService.getContacts().subscribe((contacts:Array<Contact>)=>{
      this.contacts =contacts;
      // this.contacts = this.contacts.map(contact=>{
      //   if(typeof contact.phones ==='undefined') contact.phones =[];
      //   return contact;
      // })
    });
  }
}
