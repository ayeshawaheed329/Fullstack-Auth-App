export class ResponseCode {
    public static readonly SUCCESS = new ResponseCode(200, 'Success');
    public static readonly BAD_REQUEST = new ResponseCode(400, 'Bad Request');
    public static readonly UNAUTHORIZED = new ResponseCode(401, 'Unauthorized');
    public static readonly FORBIDDEN = new ResponseCode(403, 'Forbidden');
    public static readonly NOT_FOUND = new ResponseCode(404, 'Not Found');
    public static readonly INTERNAL_SERVER_ERROR = new ResponseCode(500, 'Internal Server Error');
  
    constructor(public readonly code: number, public readonly value: string) {}
  
    toString(): string {
      return `${this.code}`;
    }
  }
  