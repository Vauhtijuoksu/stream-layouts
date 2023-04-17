<script lang="ts">
	import { ApiClient } from "./ApiClient";
	import StreamBackground from "./StreamBackground.svelte";
	import StreamData from "./StreamData.svelte";
	import type { LayoutConf } from "./models/LayoutConf";

    export let layout: LayoutConf;

    let apiClient = new ApiClient('https://api.dev.vauhtijuoksu.fi');
</script>
<div class="layout">
    <div class="background">
        <StreamBackground holes={layout.holes} />
    </div>
    <div class="content">
        <StreamData client={apiClient} fields={layout.fields} />
    </div>
</div>

<style>
    .layout, .layout > * {
        position: absolute;
        top: 0;
        left: 0;
    }
</style>