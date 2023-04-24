export interface IncentiveStatus {
    type?: string;
    milestone_goal?: number;
    status?: string;
    option?: string;
    amount?: number;
}

export interface Incentive {
    id: string;
    game_id?: string;
    title: string;
    info?: string;
    end_time?: Date;
    type: "milestone" | "option" | "open";
    milestones?: number[];
    option_parameters?: string[];
    open_char_limit?: string;
    status: IncentiveStatus[];
    total_amount: number;
}
