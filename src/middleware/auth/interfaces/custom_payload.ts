import { JwtPayload } from "jsonwebtoken";

export interface CustomRequest extends Request {
    id_user: any;
    token: string | JwtPayload;
    role_user: any;
}