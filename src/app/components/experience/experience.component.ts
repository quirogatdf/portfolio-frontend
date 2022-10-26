import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/services/experience.service';
import { Experience } from 'src/app/models/experience';
import { TokenService } from 'src/app/services/token.service';
import { IExperience } from 'src/app/interface/iexperience';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  myExperience: any;
  exp!: IExperience;
  editID!: number;
  isCreated: Boolean = false;
  isUpdated: Boolean = false;
  isLogged: boolean = false;

  public company: string = '';
  public position: string ='';
  public startDate: string = '';
  public endDate : string = '';
  public image: string = '';
  public descripcion: string ='';

  constructor(
    private datosExperience: ExperienceService,
    private tokenService: TokenService,
  ) { }

  ngOnInit(): void {
    this.cargarLista();
  }

  cargarLista(): void {
    this.datosExperience.getAll().subscribe(data => {
      this.myExperience = data;
    })
  }

  /* Habilita el formulario para cargar una nueva experiencia */
  showCreateForm(): void{
    if(this.isCreated){
      this.isCreated = false;
    } else {
      this.isCreated = true;
    }
  }
  /* Guarda en la base de datos la nueva experiencia */
  onSaveNewExperience(): void{
    let experience = new Experience(this.position, this.company, this.descripcion, this.startDate, this.endDate, this.image);
    this.datosExperience.save(experience).subscribe(data => {
      console.log('Experiencia ingresada con éxito')
      window.location.reload();
    })
  }
  /* Editar la experiencia seleccionada */
  showEditForm():void {
    if (this.isUpdated) {
      this.isUpdated = false;

    } else {
      this.isUpdated = true;
    }
  }
  loadExperienceData(id:number){
    this.editID = id;
    this.showEditForm();
    this.datosExperience.getById(id).subscribe(data => {
      this.exp = data;
    })
  }
  onUpdateExperience( ):void{
    this.datosExperience.editById(this.editID, this.exp).subscribe(data => {
      this.cargarLista();
      this.isUpdated = false;
    })


  }
  /* Elimina la experiencia seleccionada */
  deleteById(id: number) {
    this.datosExperience.deleteById(id).subscribe(data => {
      console.log('Experiencia eliminada');
      
      this.cargarLista();
    },
    err => {
      console.log(err);
    })

  }



}
