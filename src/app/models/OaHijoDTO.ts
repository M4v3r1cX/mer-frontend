export class OaHijoDTO {
    id: string;
    descripcion: string;
    redes: string[];
    niveles: string[];
    prioridad: boolean;

    constructor() {
        this.id = "";
        this.descripcion = "";
        this.redes = [];
        this.niveles = [];
        this.prioridad = false;
    }
}