import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
  @Input() ratings: number = 0;
  cropWidth: number = 75; // pixels of stars
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>;
  //creating a object for EventEmitter of generic type strings
  //@output(function hence the paranthe)decorator, so that the container can respond to this event 


  ngOnChanges(): void {
    this.cropWidth = this.ratings * 75 / 5;
  }

  onClick(): void {
    // console.log(`the rating ${this.ratings} was clicked!`);
    this.ratingClicked.emit(`the rating ${this.ratings} was clicked!`);
  }
}