import { IgService } from './ig.service';
import { Request } from 'express';
export declare class IgController {
    private readonly igService;
    constructor(igService: IgService);
    getData(q: string, limit: number, type: string, platform: string, req: Request): Promise<any>;
    getUserFeed(url: string, after: string, req: Request): Promise<any>;
    getUserContacts(url: string, platform: string, req: Request): Promise<any>;
}
