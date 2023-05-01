import type { Timer } from "./Timer";

export interface StreamMetadata {
    donation_goal: number;
    current_game_id: string;
    donatebar_info: string[];
    counters: number[];
    heart_rates: number[];
    timers: Timer[];
    now_playing: string;
}
