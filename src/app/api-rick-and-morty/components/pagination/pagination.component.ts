import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})

export class PaginationComponent implements OnInit {

  @Output() pagAtt: EventEmitter<any> = new EventEmitter()
  pagNum: number = 1


  constructor() { }

  ngOnInit(): void {
  }
  
  passPage(n: number = 1){
    if(n == 0){
      this.pagAtt.emit(n)
      this.pagNum = n
    }
    else if (n == 42){
      this.pagAtt.emit(n)
      this.pagNum = n
    }
    else if (this.pagNum + n >= 1 && this.pagNum + n <= 42){
      this.pagNum += n
      this.pagAtt.emit(this.pagNum)
    }
  }
}
