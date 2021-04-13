import { Video } from 'src/app/shared/models/search.interface';
// search.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private API_URL = 'https://www.googleapis.com/youtube/v3/search';
  private API_TOKEN = 'AIzaSyDwxcfVx87FJCmvt-fzqe_wgrEy4_2Va3k';

  constructor(private http: HttpClient) {}

  getVideos(query: string): Observable <Video[]> {
    const url = `${this.API_URL}?q=${query}&key=${this.API_TOKEN}&part=snippet&type=video&maxResults=20`;
    return this.http.get(url)
      .pipe(
        map((response: any) => response.items)
      );
  }
}
