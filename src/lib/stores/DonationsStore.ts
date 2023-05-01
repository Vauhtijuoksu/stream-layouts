import type { Donation } from '$lib/models/Donation';
import type { Incentive } from '$lib/models/Incentive';
import { derived, writable, type Unsubscriber, type Writable, type Readable, type Subscriber } from 'svelte/store';

export const donationstore: Writable<Donation[]> = writable([]);
export const incentivestore: Writable<Incentive[]> = writable([]);

export const lastDonation = derived(
  donationstore,
  $donations => $donations.slice(-1)
);

export const donationSum = derived(
  donationstore,
  $donations => $donations.reduce((sum, donation) => sum + donation.amount, 0),
  0,
);

export const upcomingIncentives = derived(
  incentivestore,
  $incentives => {
    const now = new Date();
    return $incentives
      .filter((incentive) => incentive.end_time === undefined || incentive.end_time > now)
      .sort((inc1, inc2) => {
        inc1.end_time > inc2.end_time
      });
  }
);

function makeLastDonations(): Readable<Donation[]> {
  let _val: Donation[] = [];

  return {
    subscribe: (callback: Subscriber<Donation[]>) => donationstore.subscribe((donations) => {
      if (donations.length > _val.length) {
        _val = [...donations].sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
        callback(_val);
      }
    })
  };
};

export const latestDonations = makeLastDonations()
