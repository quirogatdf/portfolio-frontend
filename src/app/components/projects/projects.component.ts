import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/interface/iproject';
import { ProjectService } from 'src/app/services/project.service';
import { TokenService } from 'src/app/services/token.service';
import { Project } from 'src/app/models/project';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  isLogged: boolean = false;
  isCreated: boolean = false;
  isEdited: boolean = false;
  myProject: any;
  getProject!: IProject;
  editId: number = -1;

  name: string = '';
  projectDate: string = '';
  description: string = '';
  urlRepository: string = '';
  urlImage: string = '';
  constructor(
    private projectData: ProjectService,
    private tokenService: TokenService,
  ) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
    this.listLoad();
  }

  listLoad(): void {
    this.projectData.getAll().subscribe(data => {
      this.myProject = data;
    })
  }

  showCreateForm(): void {
    if (this.isCreated) {
      this.isCreated = false;
    } else {
      this.isCreated = true;
    }
  }
  /* Crear un nuevo Proyecto */
  saveNewProject(): void {
    let newProject = new Project(this.name, this.projectDate, this.description, this.urlRepository, this.urlImage);
    this.projectData.save(newProject).subscribe(data => {
      window.location.reload();
    })
  }

  /* Update Project by Id */
  showEditForm(): void {
    if (this.isEdited) {
      this.isEdited = false;
    } else {
      this.isEdited = true;
    }
  }
  loadProjectData(id: number): void {
    this.editId = id;
    this.showEditForm();
    this.projectData.getById(id).subscribe(data => {
      this.getProject = data;
    })
  }
  updateProject() : void {
    let id = this.editId;
    this.projectData.editById(id, this.getProject).subscribe(data => {
      this.listLoad();
      this.isEdited = false;
    })
  }


  /* Delete Project by Id */
  deleteById(id: number): void {
    this.projectData.deleteById(id).subscribe(data => {
      this.listLoad();
    })
  }

}
