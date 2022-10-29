import { Component, OnInit } from '@angular/core';
import { IEducation } from 'src/app/interface/ieducation';
import { IExperience } from 'src/app/interface/iexperience';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/services/education.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  isLogged: boolean = false;
  isCreated: boolean = false;
  isEdited: boolean = false;
  myEducation: any;
  getEducation!: IEducation;
  editId: number = -1;

  institution : string = '';
  imageInstitution : string = '';
  degree : string = '';
  startYear : string = '';
  endYear : string = '';
  constructor(
    private educationData: EducationService,
    private tokenService: TokenService,
  ) { }

  ngOnInit(): void {
    if ( this.tokenService.getToken() ){
      this.isLogged = true;
    }
    this.listLoad();
  }

  listLoad() : void {
    this.educationData.getAll().subscribe( data => {
      this.myEducation = data;
  
    })
  }
  showCreateForm() : void {
    if ( this.isCreated ) {
      this.isCreated = false;
    } else {
      this.isCreated = true;
    }
    console.log(!this.isCreated)
  }
   saveNewEducation() : void {
    let education = new Education(this.institution, this.imageInstitution, this.degree, this.startYear, this.endYear );
    this.educationData.save(education).subscribe(data => {
      console.log('Educación ingresada con éxito')
      window.location.reload();
    })
  }
  /* Update Education by Id */
  showEditForm () : void {
    if( this.isEdited ){
      this.isEdited = false;
    } else {
      this.isEdited = true;
    }
  }
  loadEducationData (id: number) : void {
    this.editId = id;
    this.showEditForm();
    this.educationData.getById(id).subscribe ( data => {
      this.getEducation = data;
    })

  }
  updateEducation () : void {
    let id = this.editId;
    this.educationData.editById(id, this.getEducation).subscribe ( data => {
      this.listLoad();
      this.isEdited = false;
    })

  }
  /* Delete Education by Id */
  deleteById( id: number ) : void {
    this.educationData.deleteById(id).subscribe( data => {
      this.listLoad();
    })
  }

}
