<script lang="ts">
	import { ApiClient } from "./ApiClient";
	import StreamBackground from "./StreamBackground.svelte";
	import StreamData from "./StreamData.svelte";
	import type { LayoutConf, LayoutTheme } from "./models/LayoutConf";

    export let layout: LayoutConf;
    export let theme: string;

    let apiClient = new ApiClient('https://api.dev.vauhtijuoksu.fi');
</script>
<div class="layout" style="{theme}">
    <div class="background">
        <StreamBackground holes={layout.holes} />
    </div>
    <div class="content" style="width: {layout.width}px; height: {layout.height}px;">
        <StreamData client={apiClient} contents={layout.contents} />
    </div>
</div>

<style>
    .layout, .layout > * {
        position: absolute;
        top: 0;
        left: 0;
    }
</style>