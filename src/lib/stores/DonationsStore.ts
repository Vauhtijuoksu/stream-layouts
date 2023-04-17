import type { Donation } from "$lib/models/Donation";
import type { Incentive } from "$lib/models/Incentive";
import { derived, writable, type Writable } from "svelte/store";

export const donationstore: Writable<Donation[]> = writable([]);
export const incentivestore: Writable<Incentive[]> = writable([]);

export const lastDonation = derived(
    donationstore,
    $donations => $donations.slice(-1)
);

export const donationSum = derived(
    donationstore,
    $donations => $donations.reduce((sum, donation) => sum + donation.amount, 0)
);
