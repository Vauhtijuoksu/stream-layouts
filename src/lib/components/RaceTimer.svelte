<script lang="ts">
	import type { Timer } from "$lib/models/Timer";
import { metadata } from "$lib/stores/GameStore";
	import { timeDiff } from "$lib/utils/time";
	import GameTimer from "./GameTimer.svelte";

  $: timer1 = $metadata?.timers.find((t) => t.name === "1");
  $: timer2 = $metadata?.timers.find((t) => t.name === "2");
  let timer = timer1;
  $: if (timer1?.start_time && timer2?.start_time) {
    const now = Date.now();
    const time1 = timer1.end_time?.getTime() ?? now - timer1.start_time.getTime();
    const time2 = timer2.end_time?.getTime() ?? now - timer2.start_time.getTime();
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
