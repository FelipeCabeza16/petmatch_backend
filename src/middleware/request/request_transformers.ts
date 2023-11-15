import { NextFunction, Request, Response } from "express";


/**
 * Transform all requests fields with trim function
 */
export function postTrimmer(req: Request, res: Response, next: NextFunction) {
    if (req.method === 'POST') {
        req.body = trimmer(req.body);
    }
    console.log(req.body);
    next();
}
/**
 * 
 * @param obj 
 * @returns the object with string fields trimmed
 * @example
 * {
 *  name: 'John   ',
 *  user: {
 *    email: 'email@example.com    '
 * }
 * }
 * 
 * returns 
 * {
 * name: 'John',
 * user: {
 * email: 'email@example.com'
 * }
 * }
 */
function trimmer(obj: any) {
    if (typeof obj === 'string') {
        obj = obj.trim();
      }
      if (obj && typeof obj === 'object') {
        for (const key of Object.keys(obj)) {
          // Dont trim password
          if (key === 'password') {
            continue;
          }
          obj[key] = trimmer(obj[key]);
        }
      }
      return obj;
}

