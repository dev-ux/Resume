import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {
  constructor(private http: HttpClient) {}

  downloadFile(url: string, fileName: string): Observable<Blob> {
    return this.http.get(url, {
      responseType: 'blob'
    });
  }
}
