import { writable, derived, type Writable, get } from 'svelte/store';
import type { GameInfo } from '../models/GameInfo';
import type { PlayerInfo } from '$lib/models/PlayerInfo';
import type { StreamMetadata } from '$lib/models/StreamMetadata';

export const gamedata: Writable<GameInfo[]> = writable([]);
export const playerdata: Writable<PlayerInfo[]> = writable([]);
export const metadata: Writable<StreamMetadata> = writable();

export const currentGame = derived(
    [gamedata, metadata],
    ([$games, $meta]) => {
        return $games.find((g) => g.id == $meta?.current_game_id)
    }
);

export const currentPlayers = derived(
    [playerdata, currentGame],
    ([$players, $game]) => {
        let players = [];
        for (const p of $players) {
            if ($game?.players.includes(p.id)) {
                players.push(p);
            }
        }
        return players;
    }
)

export function getGame(game_id?: string): GameInfo | undefined {
    return get(gamedata).find((g) => g.id === game_id);
}

export function getPlayer(player_id: string): PlayerInfo | undefined {
    return get(playerdata).find((p) => p.id === player_id);
}
