import type { Timer } from "./Timer";

export interface StreamMetadata {
    donation_goal: number;
    current_game_id: string;
    donatebar_info: Array<string>;
    counters: Array<number>;
    heart_rates: Array<number>;
    timers: Array<Timer>;
    now_playing: string;
}
