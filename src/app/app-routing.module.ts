import { UserComponent } from './layout/user/user.component';
import { AdminComponent } from './layout/admin/admin.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { SequenceGetComponent } from './admin/sequence-get/sequence-get.component';
import { SequenceEditComponent } from './admin/sequence-edit/sequence-edit.component';
import { SequenceAddComponent } from './admin/sequence-add/sequence-add.component';
import { LoginComponent } from './admin/login/login.component';

import { ColorblindnessComponent } from './diseases/colorblindness/colorblindness.component';
import { TestsequenceComponent } from './components/testsequence/testsequence.component';
import { MethodsofgettingsequenceComponent } from './components/methodsofgettingsequence/methodsofgettingsequence.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { BannerComponent } from './components/banner/banner.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CysticFibrosisComponent } from './diseases/cystic-fibrosis/cystic-fibrosis.component';
import { HaemophiliaComponent } from './diseases/haemophilia/haemophilia.component';
import { HemochromatosisComponent } from './diseases/hemochromatosis/hemochromatosis.component';
import { MarfansyndromeComponent } from './diseases/marfansyndrome/marfansyndrome.component';
import { NeurofibromatosisComponent } from './diseases/neurofibromatosis/neurofibromatosis.component';
import { PhenylketonuriaComponent } from './diseases/phenylketonuria/phenylketonuria.component';
import { SickleCellAnemiaComponent } from './diseases/sickle-cell-anemia/sickle-cell-anemia.component';
import { TaySachsDiseaseComponent } from './diseases/tay-sachs-disease/tay-sachs-disease.component';
import { TurnerSyndromeComponent } from './diseases/turner-syndrome/turner-syndrome.component';


const routes: Routes = [

{path: 'user',
component: UserComponent,
       children: [
         {path: 'topbar', component: TopbarComponent},
 {path: 'navbar', component: NavbarComponent},
 {path: 'banner', component: BannerComponent},
 {path: 'about', component: AboutComponent},
 {path: 'contact', component: ContactComponent},
 {path: 'methodsofgettingsequence', component: MethodsofgettingsequenceComponent},
 {path: 'testsequence', component: TestsequenceComponent},
 {path: 'colorblindness', component: ColorblindnessComponent},
 {path: 'cysticfibrosis', component: CysticFibrosisComponent},
 {path: 'haemophilia', component: HaemophiliaComponent},
 {path: 'hemochromatosis', component: HemochromatosisComponent},
 {path: 'marfansyndrome', component: MarfansyndromeComponent},
 {path: 'neurofibromatosis', component: NeurofibromatosisComponent},
 {path: 'phenylketonuria', component: PhenylketonuriaComponent},
 {path: 'sicklecellanemia', component: SickleCellAnemiaComponent},
 {path: 'taysachdisease', component: TaySachsDiseaseComponent},
 {path: 'turnersyndrome', component: TurnerSyndromeComponent}
       ]

},
{ path: 'admin',
component: AdminComponent,
       children: [
          {path: 'adminlogin', component: LoginComponent},
 {path: 'sequence_add', component: SequenceAddComponent},
 {path: 'sequence_edit/:id', component: SequenceEditComponent},
 {path: 'sequence_get' , component: SequenceGetComponent},
 {path: 'sidebar' , component: SidebarComponent}
       ]


},
{ path: '**', redirectTo: 'user/banner' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
