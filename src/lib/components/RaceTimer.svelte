<script lang="ts">
	import type { Timer } from "$lib/models/Timer";
import { metadata } from "$lib/stores/GameStore";
	import { timeDiff } from "$lib/utils/time";
	import GameTimer from "./GameTimer.svelte";

  $: timer1 = $metadata?.timers.find((t) => t.name === "1");
  $: timer2 = $metadata?.timers.find((t) => t.name === "2");
  let timer = timer1;
  $: if (timer1?.start_time && timer2?.start_time) {
    const now = new Date();
    const time1 = timeDiff(timer1.start_time, timer1.end_time ?? now);
    const time2 = timeDiff(timer2.start_time, timer2.end_time ?? now);
    if (time1 > time2) {
      timer = timer1;
    } else {
      timer = timer2;
    }
  } else {
    timer = timer1;
  }
</script>

<GameTimer name="any" {timer} />
