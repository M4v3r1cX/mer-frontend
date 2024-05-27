export class OaHijoDTO {
    id: string;
    descripcion: string;
    redes: string[];
    niveles: string[];
    prioridad: boolean;
    x: number;
    y: number;
    tieneCoordenadas: boolean;

    constructor() {
        this.id = "";
        this.descripcion = "";
        this.redes = [];
        this.niveles = [];
        this.prioridad = false;
        this.x = 0;
        this.y = 0;
        this.tieneCoordenadas = false;
    }
}