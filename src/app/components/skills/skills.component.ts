import { Component, OnInit } from '@angular/core';
import { ISkill } from 'src/app/interface/iskill';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill.service';
import { TokenService } from 'src/app/services/token.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  isLogged: boolean = false;
  isCreated: boolean = false;
  isEdited: boolean = false;
  mySkill: any;
  getSkill!: ISkill;
  editId: number = -1;

  skill: string = '';
  percent: number = 0;
  imageSkill: string = '';

  constructor(
    private skillData: SkillService,
    private tokenService: TokenService,
  ) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
    this.listLoad();
  }
  listLoad(): void {
    this.skillData.getAll().subscribe(data => {
      this.mySkill = data;
    })
  }

  showCreateForm(): void {
    if (this.isCreated) {
      this.isCreated = false;
    } else {
      this.isCreated = true;
    }
  }
  /* Agregar una nuevad Habilidad */
  saveNewSkill(): void {
    let newSkill = new Skill(this.skill, this.percent.toString(), this.imageSkill);
    this.skillData.save(newSkill).subscribe(data => {
      window.location.reload();
    })
  }


  /* Update Education by Id */
  showEditForm(): void {
    if (this.isEdited) {
      this.isEdited = false;
    } else {
      this.isEdited = true;
    }
  }

  loadSkillData(id: number): void {
    this.editId = id;
    this.showEditForm();
    this.skillData.getById(id).subscribe(data => {
      this.getSkill = data;
    })
  }

  updateSkill () {
    let id = this.editId;
    this.skillData.editById(id, this.getSkill).subscribe ( data => {
      this.listLoad();
      this.isEdited = false;
    })

  }


  /* Delete Skill by Id */
  deleteById(id: number): void {
    this.skillData.deleteById(id).subscribe(data => {
      this.listLoad();
    })
  }
}
