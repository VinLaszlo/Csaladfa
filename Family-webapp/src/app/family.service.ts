import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FamilyService {
  private apiUrl = 'http://localhost:3000/csaladtagok';

  constructor(private http: HttpClient) { }

  getFamilyMembers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addFamilyMember(memberData: any): Observable<any> {
    return this.http.post(this.apiUrl, memberData);
  }

  deleteFamilyMember(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}