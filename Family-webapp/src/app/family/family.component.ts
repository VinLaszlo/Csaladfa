import { Component, OnInit } from '@angular/core';
import { FamilyService } from '../family.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css'],
})
export class FamilyComponent implements OnInit {
  familyMembers: any[] = [];

  constructor(private familyService: FamilyService, private router: Router) { }

  ngOnInit(): void {
    this.loadFamilyMembers();
  }

  loadFamilyMembers(): void {
    this.familyService.getFamilyMembers().subscribe((data: any[]) => {
      data.sort((a, b) => (a.familyName > b.familyName ? 1 : -1));
      const groupedData: { [key: string]: any[] } = {};
      data.forEach((member) => {
        const key = member.familyName;
        if (!groupedData[key]) {
          groupedData[key] = [];
        }
        groupedData[key].push(member);
      });

      const familyGroups: any[] = [];
      Object.keys(groupedData).forEach((key) => {
        const titleGroups: { [key: string]: any[] } = {};
        groupedData[key].forEach((member) => {
          const title = member.familyTitle;
          if (!titleGroups[title]) {
            titleGroups[title] = [];
          }
          titleGroups[title].push(member);
        });

        const titles = Object.keys(titleGroups);
        const sortedTitles = titles.sort((a, b) => {
          const order = ['Dédnagyszülő', 'Nagyszülő', 'Szülő', 'Gyermek'];
          return order.indexOf(a) - order.indexOf(b);
        });

        const sortedMembers = sortedTitles.map((title) => titleGroups[title]);
        familyGroups.push({ title: key, members: sortedMembers.flat() });
      });

      this.familyMembers = familyGroups;
    });
  }

  deleteFamilyMember(id: number): void {
    this.familyService.deleteFamilyMember(id).subscribe(() => {
      this.loadFamilyMembers();
    });
  }
}
