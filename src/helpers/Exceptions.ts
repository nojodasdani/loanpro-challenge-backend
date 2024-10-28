import { StatusCodes } from '@enums/enums';

export class BackendCustomException extends Error {
    public originalError: unknown;
    public errorCode: number;
    public httpStatus: StatusCodes;
    public clientMessage: string;
    public internalMessage: string;

    constructor(msg = '', originalError: Error = new Error()) {
        super(msg);
        this.originalError = originalError;
        this.errorCode = 500;
        this.httpStatus = StatusCodes.SERVER_ERROR;
        this.clientMessage = 'Something went wrong';
        this.internalMessage = msg;
    }
}

/**
 * General Bad request exceptions (400.x)
 */
export class BadRequestException extends BackendCustomException {
    constructor(msg = '', originalError: Error = new Error(), clientMessage = 'Bad Request.') {
        super(msg, originalError);
        this.errorCode = 400;
        this.httpStatus = StatusCodes.BAD_REQUEST;
        this.clientMessage = clientMessage;
        this.internalMessage = msg;
    }
}

/*********************************************
 *
 *  Custom Server Error Exceptions (500.x)
 *
 *********************************************/
