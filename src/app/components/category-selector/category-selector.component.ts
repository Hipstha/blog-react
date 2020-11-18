import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.scss']
})
export class CategorySelectorComponent implements OnInit {

  @Output() filter = new EventEmitter();

  public allSelected = true;
  public TravelSelected = false;
  public LifestyleSelected = false;
  public BusinessSelected = false;
  public FoodSelected = false;
  public WorkSelected = false;

  public filteredDb: any[];

  constructor(private databaseService: DatabaseService) { }

  ngOnInit(): void {
  }

  filterDBBy( value: string ): void {
    if(value !== 'All') {
      this.filteredDb = this.databaseService.database.filter(arr => arr.category === value);
    } else {
      this.filteredDb = this.databaseService.database;
    }
    this.filter.emit(this.filteredDb);
    this.setActiveItem(value);
  }

  private setActiveItem(value: string): void {
    switch ( value ) {
      case 'All': {
        this.allSelected = true;
        this.TravelSelected = false;
        this.LifestyleSelected = false;
        this.BusinessSelected = false;
        this.FoodSelected = false;
        this.WorkSelected = false;
        break;
      }
      case 'Travel': {
        this.TravelSelected = true;
        this.allSelected = false;
        this.LifestyleSelected = false;
        this.BusinessSelected = false;
        this.FoodSelected = false;
        this.WorkSelected = false;
        break;
      }
      case 'Lifestyle': {
        this.LifestyleSelected = true;
        this.TravelSelected = false;
        this.allSelected = false;
        this.BusinessSelected = false;
        this.FoodSelected = false;
        this.WorkSelected = false;
        break;
      }
      case 'Business': {
        this.BusinessSelected = true;
        this.TravelSelected = false;
        this.LifestyleSelected = false;
        this.allSelected = false;
        this.FoodSelected = false;
        this.WorkSelected = false;
        break;
      }
      case 'Food': {
        this.FoodSelected = true;
        this.TravelSelected = false;
        this.LifestyleSelected = false;
        this.BusinessSelected = false;
        this.allSelected = false;
        this.WorkSelected = false;
        break;
      }
      case 'Work': {
        this.WorkSelected = true;
        this.TravelSelected = false;
        this.LifestyleSelected = false;
        this.BusinessSelected = false;
        this.FoodSelected = false;
        this.allSelected = false;
        break;
      }

    }
  }

}
