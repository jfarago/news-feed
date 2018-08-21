import { Component, OnInit, Input } from '@angular/core';
import { NewsFeedService } from '../../services/news-feed.service'; // would normally use webpack to make a relative path based on src


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() itemID: number;
  item: object;

  constructor(private newsFeedService: NewsFeedService) {}

  ngOnInit(): void {
    this.newsFeedService.getItem(this.itemID)
      .subscribe((res) => {
        this.item = res;
      }, (err) => {
        console.log('Whoops, something when wrong: ', err);
      });
  }

}
