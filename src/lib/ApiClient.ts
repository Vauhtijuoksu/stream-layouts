import type { GameInfo } from "./models/GameInfo";
import type { PlayerInfo } from "./models/PlayerInfo";

export class ApiClient {
    baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    private url(path: string) {
        return `${this.baseUrl}/${path}`;
    }

    private async get(path: string): Promise<any> {
        try {
            const response = await fetch(this.url(path))
            console.log(response);
            return await response.json();
        } catch (error) {
            console.log(error);
        }
    }

    public async getPlayers(): Promise<PlayerInfo[]> {
        return await this.get('players');
    }

    public async getGames(): Promise<GameInfo[]> {
        return await this.get('gamedata');
    }
}