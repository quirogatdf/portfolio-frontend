import{ISkill} from '../interface/iskill';
export class Skill implements ISkill{
    id?: number;
    skill: string;
    percent: string;
    imageSkill: string

    constructor ( skill: string, percent: string, imageSkill: string){
        this.skill = skill;
        this.percent = percent;
        this.imageSkill = imageSkill;
    }
}