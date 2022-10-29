export class Education {
    id?: number
    institution!: string;
    imageInstitution!: string;
    degree!: string;
    startYear!: string;
    endYear!: string;

    constructor( institution: string, imageInstitution: string, degree: string, startYear: string, endYear: string ){
        this.institution = institution;
        this.imageInstitution = imageInstitution;
        this.degree = degree;
        this.startYear = startYear;
        this.endYear = endYear;
    }
}