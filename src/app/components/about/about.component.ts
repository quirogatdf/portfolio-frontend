import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service'
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  myData: any = {};
  isLogged: boolean = false;
  isEdited: boolean = false;
  editAboutForm!: FormGroup;
  roles!: string[];
  authority!: string;
  constructor(
    private tokenService: TokenService,
    private datosPortfolio: PortfolioService,
    private formBuilder: FormBuilder,
  ) {
    this.createForm();
  }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.roles = [];
      this.roles = this.tokenService.getAuthorities();
      this.roles.every((rol) => {
        if (rol === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }

    this.datosPortfolio.getAbout('mequiroga').subscribe((data) => {
      this.myData = data;
    })
  }
  private createForm() {
    this.editAboutForm = this.formBuilder.group({
      lastname: '',
      name: '',
      phone: '',
      mail: '',
      title: '',
      ubication: '',
      profileImage: '',
      bannerImage: '',
      about: '',

    })

  }
  onEdit() {
    if (this.isEdited) {
      this.isEdited = false;
    } else {
      this.isEdited = true;
      this.editAboutForm.setValue({
        lastname: this.myData.lastname,
        name: this.myData.name,
        phone: this.myData.phone,
        mail: this.myData.mail,
        title: this.myData.title,
        ubication: this.myData.ubication,
        profileImage: this.myData.profileImage,
        bannerImage: this.myData.bannerImage,
        about: this.myData.about,

      })
    }
  }

  submitEditForm() {

    this.datosPortfolio.editAbout(
      this.editAboutForm.value, 1).subscribe(data => {
        console.log(this.editAboutForm.value);
        console.log(data)
        this.datosPortfolio.getAbout('mequiroga').subscribe(data => {
          this.myData = data[0];
        });
        this.isEdited = false;
        window.location.reload();
      });
  }

}
