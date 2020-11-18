import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  public submittedForm = false;
  public submittedFormUpdate = false;
  public invalidForm = false;
  public invalidTitle = false;
  public invalidSummary = false;
  public invalidImg = false;
  public invalidCategory = false;
  public thisId: number;

  public postForm = this.fb.group({
    id: [''],
    title: ['', Validators.required],
    summary: ['', Validators.required],
    comments: [[]],
    img: ['https://source.unsplash.com/random', Validators.required],
    category: ['', Validators.required]
  });

  public postFormUpdate = this.fb.group({
    id: ['', Validators.required],
    title: ['', Validators.required],
    summary: ['', Validators.required],
    comments: [[]],
    img: ['', Validators.required],
    category: ['', Validators.required]
  });

  constructor(private databaseService: DatabaseService, private fb: FormBuilder) {
    this.thisId = this.databaseService.database.length;
  }

  ngOnInit(): void {
    this.databaseService.updateChange.subscribe((value) => {
      this.postFormUpdate = this.fb.group({
        id: [value.id, Validators.required],
        title: [value.title, Validators.required],
        summary: [value.summary, Validators.required],
        comments: [value.comments],
        img: [value.img, Validators.required],
        category: [value.category, Validators.required]
      });
    });
    this.databaseService.dataBaseChange.subscribe((value) => {
      this.thisId = value.length;
    });
  }

  public addPost(): void {
    this.submittedForm = true;
    const thisId = this.thisId + 1;
    if ( this.postForm.invalid) {
      Swal.fire('Error trying to save your post', 'Complete the required fields', 'error');
      return;
    }
    this.postForm.value.id = thisId;
    this.postForm.value.comments = [];
    this.databaseService.database.unshift(this.postForm.value);
    this.databaseService.dataBaseChange.next(this.databaseService.database);
    Swal.fire('Success', 'Your post have been saved', 'success');
    ($('#exampleModal') as any).modal('hide');
    this.submittedForm = false;
  }

  public updatePost(): void {
    this.submittedFormUpdate = true;
    if ( this.postFormUpdate.invalid) {
      Swal.fire('Error trying to update your post', 'Complete the required fields', 'error');
      return;
    }
    this.databaseService.database.map(obj => {
      if (obj.id === this.postFormUpdate.value.id) {
        const replaceIndex = this.databaseService.database.indexOf(obj);
        obj = this.postFormUpdate.value;
        this.databaseService.database[replaceIndex] = obj;
      }
    });
    Swal.fire('Success', 'Your post have been updated', 'success');
    ($('#updateModal') as any).modal('hide');
  }

  public invalidFieldUpdate( field: string ): boolean {
    if ( this.postFormUpdate.get(field).invalid && this.submittedFormUpdate ) {
      return true;
    } else {
      return false;
    }
  }

  public invalidField( field: string ): boolean {
    if ( this.postForm.get(field).invalid && this.submittedForm ) {
      return true;
    } else {
      return false;
    }
  }

}
