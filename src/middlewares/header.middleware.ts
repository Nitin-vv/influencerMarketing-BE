import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class HeaderMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Perform header checks here
    const authkey = req.headers['authkey']; 
    if (!authkey) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    // Proceed to controller
    next();
  }
}
