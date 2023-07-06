import { Injectable, Query } from '@nestjs/common';
import axios from 'axios';

const BASE_URL = process.env?.BASE_URL;
const HEADERS = {
  authkey: process.env?.AUTH_KEY,
};

@Injectable()
export class IgService {
  async getData(
    q: string,
    limit: number,
    type: string,
    platform: string,
  ): Promise<any> {
    const response = await axios.get(`${BASE_URL}/dict/users`, {
      headers: HEADERS,
      params: {
        q: q || 'adam', // search query
        limit: limit || 10,
        type: type || 'lookalike',
        platform: platform || 'instagram', // social media platform
      },
    });
    return response.data;
  }

  async getFeeds(url: string, after: string): Promise<any> {
    const response = await axios.get(`${BASE_URL}/raw/ig/user/feed`, {
      headers: HEADERS,
      params:{
        url: url, // Influencer username, userId for link to user's profile page
        after:after // end_cursor field from the last response to get next page
      }
    });
    return response.data;
  }

  async fetchUserContacts(url: string, platform: string): Promise<any> {
    const response = await axios.get(`${BASE_URL}/exports/contacts`, {
      headers: HEADERS,
      params: {
        url: url, // Influencer username, userId for link to user's profile page
        platform: platform || 'instagram', // social media platform
      },
    });
    return response.data;
  }
}
