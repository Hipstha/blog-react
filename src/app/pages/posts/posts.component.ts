import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public database: any[];
  public filteredDb: any[];

  public isEmpty: boolean;

  constructor( public databaseService: DatabaseService) {
    this.filteredDb = databaseService.database;
  }

  ngOnInit(): void {
    this.isEmpty = true;
    this.databaseService.dataBaseChange.subscribe((value) => {
      this.filteredDb = value;
    });
  }

  filterDatabase(array): void {
    this.filteredDb = array;
    if (this.filteredDb.length === 0) {
      this.isEmpty = false;
    } else {
      this.isEmpty = true;
    }
  }

}
