import { Component, OnInit } from '@angular/core';
import { DataAccessService } from '../../services/data-access.service';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.css']
})
export class SnacksComponent implements OnInit {
    chipsList:any[] = [];
  constructor(private _dao : DataAccessService) { 
   
  }

  ngOnInit() {
      this._dao.getAllChips().subscribe((data:any[]) => {
        console.log(data);
        this.chipsList = data; 
      });
  }

}
