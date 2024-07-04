'use strict';

import { ResponseCode } from "constants/ResponseCode"; 

export class BaseResponseDto<T> {
    status: boolean;
    message: string;
    statusCode: number;
    data: T;

    constructor(message: ResponseCode, data: T, status = true) {
        this.status = status;
        this.message = message.value;
        this.statusCode = message.code;
        this.data = data;
    }
}
