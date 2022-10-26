export class Experience {
    id?: number;
    position: string;
    company: string;
    descripcion: string;
    startDate: string;
    endDate: string;
    image: string;

    constructor(position: string, company: string, descripcion: string, startDate: string, endDate: string, image: string){
        this.position = position;
        this.company = company;
        this.descripcion = descripcion;
        this.startDate = startDate;
        this.endDate = endDate;
        this.image = image;

    }
}

