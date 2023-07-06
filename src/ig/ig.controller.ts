import { Controller, Get, Query, Req } from '@nestjs/common';
import { IgService } from './ig.service';
import { Request } from 'express';

@Controller('ig')
export class IgController {
  constructor(private readonly igService: IgService) {}

  @Get('users')
  async getData(
    @Query('q') q: string,
    @Query('limit') limit: number,
    @Query('type') type: string,
    @Query('platform') platform: string,
    @Req() req: Request,
  ): Promise<any> {
    const authkey = req.headers['authkey'];
    return this.igService.getData(q, limit, type, platform);
  }

  @Get('user/feeds')
  async getUserFeed(
    @Query('url') url: string,
    @Query('after') after: string,
    @Req() req: Request,
  ): Promise<any> {
    return this.igService.getFeeds(url, after);
  }

  @Get('user/contacts')
  async getUserContacts(
    @Query('url') url: string,
    @Query('platform') platform: string,
    @Req() req: Request,
  ): Promise<any> {
    return this.igService.fetchUserContacts(url, platform);
  }
}
