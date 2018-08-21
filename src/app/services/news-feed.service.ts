import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

// Normally I would add variable protection and error handling
export class NewsFeedService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://hacker-news.firebaseio.com/v0';
  }

  getTopStories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/topstories.json`)
      .pipe(map(response => response));
  }

  getItem(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/item/${id}.json`)
      .pipe(map(response => response));
  }
}
