import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Post } from '../../interfaces/post';
import { DatabaseService } from '../../services/database.service';
import * as $AB from 'jquery';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() dataItem: Post;

  public summaryShort: string;
  public databaseWithout: Post[];
  public classDestroy: boolean
  constructor(private databaseService: DatabaseService, private router: Router) { }

  ngOnInit(): void {
    this.summaryShort = this.dataItem.summary.substring(0, 150) + '...';
  }

  public redirect(): void {
    this.router.navigate(['posts/1']);
  }

  public updatePost(event, dataItem): void {
    event.preventDefault();
    event.stopPropagation();
    (document.getElementById('titleInput') as HTMLInputElement).value = dataItem.title;
    (document.getElementById('summaryUpdate') as HTMLInputElement).value = dataItem.summary;
    (document.getElementById('imgInput') as HTMLInputElement).value = dataItem.img;

    this.databaseService.updateChange.next({
      id: dataItem.id,
      title: dataItem.title,
      summary: dataItem.summary,
      comments: dataItem.comments,
      img: dataItem.img,
      category: dataItem.category
    });
    ($('#updateModal') as any).modal('show');
  }

  public deletePost(event, id): void {
    event.preventDefault();
    event.stopPropagation();
    Swal.fire({
      title: 'Are you sure you want to delete this post?',
      showCancelButton: true,
      confirmButtonText: `Delete`
    }).then((result) => {
      if ( result.isConfirmed ) {
        Swal.fire('Successfully deleted', 'This post has been deleted', 'success');
        this.databaseWithout = this.databaseService.database.filter(data => data.id !== id);
        this.databaseService.database = this.databaseWithout;
        this.databaseService.dataBaseChange.next(this.databaseService.database);
      }
    });
  }

}
