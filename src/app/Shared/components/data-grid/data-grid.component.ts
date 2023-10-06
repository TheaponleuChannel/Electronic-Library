import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataGridItemsColumn } from 'src/app/Models/data-grid-items-column';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit, AfterViewInit {

  dataDisplayColumns : string[];
  dataSource : MatTableDataSource<any>;

  @Input() itemData : MatTableDataSource<any>;
  @Input() ItemTableColumn: DataGridItemsColumn[];

  constructor(){}

  ngOnInit(): void {
    this.dataDisplayColumns = this.ItemTableColumn.map(col => col.displayName);
  }

  ngAfterViewInit(): void {
  }
}
