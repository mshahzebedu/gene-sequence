import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { TestsequenceComponent } from './components/testsequence/testsequence.component';
import { MethodsofgettingsequenceComponent } from './components/methodsofgettingsequence/methodsofgettingsequence.component';
import { ColorblindnessComponent } from './diseases/colorblindness/colorblindness.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './admin/login/login.component';
import { SequenceAddComponent } from './admin/sequence-add/sequence-add.component';
import { SequenceEditComponent } from './admin/sequence-edit/sequence-edit.component';
import { SequenceGetComponent } from './admin/sequence-get/sequence-get.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { FormGroup, FormBuilder, Validators , ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './layout/user/user.component';
import { AdminComponent } from './layout/admin/admin.component';
import { CysticFibrosisComponent } from './diseases/cystic-fibrosis/cystic-fibrosis.component';
import { HaemophiliaComponent } from './diseases/haemophilia/haemophilia.component';
import { HemochromatosisComponent } from './diseases/hemochromatosis/hemochromatosis.component';
import { MarfansyndromeComponent } from './diseases/marfansyndrome/marfansyndrome.component';
import { NeurofibromatosisComponent } from './diseases/neurofibromatosis/neurofibromatosis.component';
import { PhenylketonuriaComponent } from './diseases/phenylketonuria/phenylketonuria.component';
import { SickleCellAnemiaComponent } from './diseases/sickle-cell-anemia/sickle-cell-anemia.component';
import { TaySachsDiseaseComponent } from './diseases/tay-sachs-disease/tay-sachs-disease.component';
import { TurnerSyndromeComponent } from './diseases/turner-syndrome/turner-syndrome.component';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    NavbarComponent,
    BannerComponent,
    AboutComponent,
    ContactComponent,
    TestsequenceComponent,
    MethodsofgettingsequenceComponent,
    ColorblindnessComponent,
    FooterComponent,
    LoginComponent,
    SequenceAddComponent,
    SequenceEditComponent,
    SequenceGetComponent,
    SidebarComponent,
    UserComponent,
    AdminComponent,
    CysticFibrosisComponent,
    HaemophiliaComponent,
    HemochromatosisComponent,
    MarfansyndromeComponent,
    NeurofibromatosisComponent,
    PhenylketonuriaComponent,
    SickleCellAnemiaComponent,
    TaySachsDiseaseComponent,
    TurnerSyndromeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
