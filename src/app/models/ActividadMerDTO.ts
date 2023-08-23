export class ActividadMerDTO {
    nombre: string;
    textoCajaOaCapa2: string;
    textoCajaTmCapa2: string;
    ubicacionEnLibro: string;
    descripcionActividad: string;
    imagenReferencia: string;
    linkReferencia: string;
    idRed: string;
    idNivel: string;
    idLibro: string;
    idUsuarioCarga: string;

    constructor() {
        this.nombre = "";
        this.textoCajaOaCapa2 = "";
        this.textoCajaTmCapa2 = "";
        this.ubicacionEnLibro = "";
        this.descripcionActividad = "";
        this.imagenReferencia = "";
        this.linkReferencia = "";
        this.idRed = "";
        this.idLibro = "";
        this.idNivel = "";
        this.idUsuarioCarga = "";
    }
}