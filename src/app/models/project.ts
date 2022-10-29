import { IProject } from '../interface/iproject';

export class Project implements IProject {
    id?: number;
    name: string;
    projectDate: string;
    description: string;
    urlRepository: string;
    urlImage: string;

    constructor (name: string, projectDate: string, description: string, urlRepository: string, urlImage: string) {
        this.name = name;
        this.projectDate = projectDate;
        this.description = description;
        this.urlRepository = urlRepository;
        this.urlImage = urlImage;
    }
    
}