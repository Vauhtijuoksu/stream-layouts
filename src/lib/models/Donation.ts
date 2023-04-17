export interface Donation {
    id: string;
    timestamp: Date;
    name: string;
    message?: string;
    read: boolean;
    amount: number;
    // incentives: any; // Not very useful here
}