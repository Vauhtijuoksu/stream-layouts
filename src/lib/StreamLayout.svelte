<script lang="ts">
	import { browser } from "$app/environment";
	import { ApiClient } from "./ApiClient";
	import StreamBackground from "./StreamBackground.svelte";
	import StreamData from "./StreamData.svelte";
	import type { LayoutConf, LayoutTheme } from "./models/LayoutConf";

    export let layout: LayoutConf;
    export let theme: LayoutTheme;

    let apiClient = new ApiClient('https://api.dev.vauhtijuoksu.fi');
    
    $: if (browser && theme?.fonts) {
        theme.fonts.forEach(async (font) => {
            const newFont = new FontFace(font.family, `url(${font.url})`, font.descriptors);
            const fontFace = await newFont.load();
            document.fonts.add(fontFace);
        })
    }
</script>
<div class="layout" style="{theme.style}">
    <div class="background">
        <StreamBackground width={layout.width} height={layout.height} {...layout.background} />
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

    :global(*) {
        font-family: var(--font-family);
        color: var(--font-color);
    }
</style>