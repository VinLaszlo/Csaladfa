import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { FamilyComponent } from './family/family.component';
import { NewFamilyMemberComponent } from './new-family-member/new-family-member.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'family', component: FamilyComponent },
  { path: 'new-family-member', component: NewFamilyMemberComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
