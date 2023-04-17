import { writable, derived, type Writable } from 'svelte/store';
import type { GameInfo } from '../models/GameInfo';

export const gamedata: Writable<GameInfo[]> = writable([]);
