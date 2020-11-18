import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  public idObject: number;
  public thisDatabase: Post;
  public invalidForm = false;
  public commentsForm = this.fb.group({
    user: [''],
    comment: ['', Validators.required]
  });

  constructor(private route: ActivatedRoute, private databaseService: DatabaseService, private fb: FormBuilder) {
    this.route.params.subscribe(res => this.idObject = Number(res.id));
    this.thisDatabase = this.databaseService.database.filter(data => data.id === this.idObject)[0];
  }

  ngOnInit(): void {
  }
  public addComment(): void {
    if ( this.commentsForm.invalid ) {
      this.invalidForm = true;
      return;
    }
    this.invalidForm = false;
    this.commentsForm.value.user = 'Joe Doe';
    this.thisDatabase.comments.push(this.commentsForm.value);
    this.commentsForm.reset();
  }
}
