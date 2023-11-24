export class AsociarOaDTO {
    idOaInicial: string;
    idOasFinales: string[] = [];

    constructor() {
        this.idOaInicial = "";
        this.idOasFinales = [];
    }
}