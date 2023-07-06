export declare class IgService {
    getData(q: string, limit: number, type: string, platform: string): Promise<any>;
    getFeeds(url: string, after: string): Promise<any>;
    fetchUserContacts(url: string, platform: string): Promise<any>;
}
