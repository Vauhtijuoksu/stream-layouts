import type { Donation } from "./models/Donation";
import type { GameInfo } from "./models/GameInfo";
import type { Incentive } from "./models/Incentive";
import type { PlayerInfo } from "./models/PlayerInfo";
import type { StreamMetadata } from "./models/StreamMetadata";

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
            return await response.json();
        } catch (error) {
            console.log(error);
        }
    }

    private static adaptDates(...fields: string[]): (obj: any) => any {
        return (obj: any) => {
            for (let field of fields) {
                try {
                    obj[field] = new Date(obj[field]);
                } catch (error) {
                    // pass
                }
            }
            return obj;
        }
    }

    public async getPlayers(): Promise<PlayerInfo[]> {
        return await this.get('players');
    }

    public async getGames(): Promise<GameInfo[]> {
        let games_raw = await this.get('gamedata');
        return await games_raw.map(
            ApiClient.adaptDates(
                'start_time',
                'end_time'
            )
        );
    }

    public async getMetadata(): Promise<StreamMetadata> {
        const meta_raw = await this.get('stream-metadata');
        return {
            timers: meta_raw.timers.map(
                ApiClient.adaptDates('start_time', 'end_time')
            ),
            ...meta_raw
        }
    }

    public async getAll(): Promise<{players: PlayerInfo[], games: GameInfo[], meta: StreamMetadata}> {
        const value = await Promise.all([
            this.getPlayers(),
            this.getGames(),
            this.getMetadata(),
        ]);
        return {
            players: value[0],
            games: value[1],
            meta: value[2]
        }
    }

    public async getDonations(): Promise<Donation[]> {
        const donos_raw = await this.get('donations');
        return donos_raw.map(ApiClient.adaptDates('timestamp'));
    }

    public async getIncentives(): Promise<Incentive[]> {
        const incentives = await this.get('incentives');
        return incentives.map(ApiClient.adaptDates('end_time'));
    }
}
