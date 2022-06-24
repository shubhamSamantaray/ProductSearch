import { Component, Input, OnChanges } from "@angular/core";

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
  @Input() ratings: number = 0;
  cropWidth: number = 75; // pixels of stars

  ngOnChanges(): void {
    this.cropWidth = this.ratings * 75 / 5;
  }
}