import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  //Component code goes here
  name : string = "";
  items : string[] = [];

  constructor(private dataService: DataService) {
    this.items = this.dataService.getItems();
}
addItem(item: string) : void {
  if(item){
    this.dataService.addItem(item);
    this.items = this.dataService.getItems();
  }
}
}
