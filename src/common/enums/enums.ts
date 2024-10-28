export enum StatusCodes {
    OK = 200,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
    CONFLICT = 409,
    FORBIDDEN = 403,
    SERVER_ERROR = 500,
}

export enum BanxicoSeries {
    CURRENT = 'SF43718',
    HISTORIC = 'SF63528',
    AVERAGE = 'SF43718',
}

export enum Endpoint {
    CURRENT = 1,
    HISTORIC = 2,
    AVERAGE = 3,
}
