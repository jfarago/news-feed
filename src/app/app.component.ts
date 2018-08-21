import { Component, OnInit } from '@angular/core';
import { NewsFeedService } from './services/news-feed.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: string[];

  constructor(private newsFeedService: NewsFeedService) {}

  ngOnInit(): void {
    this.newsFeedService.getTopStories()
      .subscribe((res) => {
        this.items = res;
      }, (err) => {
        console.log('Whoops, something when wrong: ', err);
      });
  }
}
