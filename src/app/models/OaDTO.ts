import { OaHijoDTO } from "./OaHijoDTO";

export class OaDTO {
    id: string;
    codigo: string;
    descripcion: string;
    redes: string[];
    niveles: string[];
    prioridad: boolean;
    hijos: OaHijoDTO[];
    hijosABorrar: string[];

    constructor() {
        this.id = "";
        this.codigo = "";
        this.descripcion = "";
        this.redes = [];
        this.niveles = [];
        this.prioridad = false;
        this.hijos = [];
        this.hijosABorrar = [];
    }
}