import { HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
export function CustomMiddleware(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    next()
}
