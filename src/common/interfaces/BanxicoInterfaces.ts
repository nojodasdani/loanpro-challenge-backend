export interface ApiResponse {
    bmx: {
        series: Serie[];
    };
}

export interface Serie {
    idSerie: string;
    titulo: string;
    datos: Dato[];
}

export interface Dato {
    fecha: string;
    dato: string;
}
