import type { Donation } from "$lib/models/Donation";
import { derived, writable, type Writable } from "svelte/store";

export const donationstore: Writable<Donation[]> = writable([]);

export const lastDonation = derived(
    donationstore,
    $donations => $donations.slice(-1)
);

export const donationSum = derived(
    donationstore,
    $donations => $donations.reduce((sum, donation) => sum + donation.amount, 0)
);