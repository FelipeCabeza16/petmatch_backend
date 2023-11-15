import { Request } from "express";
export const getIpUser = (req: Request): string => {

    try {
        const ip = req.socket.remoteAddress || req.ip || 
        '';
        return ip;
    } catch (error) {
        return error;
    }
}