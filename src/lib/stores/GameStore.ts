import { writable, derived, type Writable } from 'svelte/store';
import type { GameInfo } from '../models/GameInfo';
import type { PlayerInfo } from '$lib/models/PlayerInfo';
import type { StreamMetadata } from '$lib/models/StreamMetadata';

export const gamedata: Writable<GameInfo[]> = writable([]);
export const playerdata: Writable<PlayerInfo[]> = writable([]);
export const metadata: Writable<StreamMetadata> = writable();
