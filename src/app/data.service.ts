import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private items: string[] = [];

  constructor() { }

  addItem(item: string) {
    this.items.push(item);
  }

  getItems() :string[] {
    return this.items;
  }

  clearItems() : void  {
    this.items = [];
  }

}
