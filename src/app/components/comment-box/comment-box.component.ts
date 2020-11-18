import { Component, Input, OnInit } from '@angular/core';
import { CommentInterface } from '../../interfaces/comment';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.scss']
})
export class CommentBoxComponent implements OnInit {

  @Input() thisComment: CommentInterface;
  constructor() { }

  ngOnInit(): void {
  }

}
