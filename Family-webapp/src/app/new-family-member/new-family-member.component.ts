import { Component } from '@angular/core';
import { FamilyService } from '../family.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-family-member',
  templateUrl: './new-family-member.component.html',
  styleUrls: ['./new-family-member.component.css'],
})
export class NewFamilyMemberComponent {
  formData: any = {
    familyTitle: '',
  };

  constructor(private familyService: FamilyService, private router: Router) { }

  addFamilyMember(): void {
    this.familyService.addFamilyMember(this.formData).subscribe(() => {
      this.router.navigate(['/family']);
    });
  }

  isFormValid(): boolean {
    return (
      !!this.formData.familyTitle &&
      !!this.formData.familyName &&
      !!this.formData.name &&
      !!this.formData.birthDate &&
      !!this.formData.birthPlace &&
      !!this.formData.motherName &&
      !!this.formData.fatherName
    );
  }
}
