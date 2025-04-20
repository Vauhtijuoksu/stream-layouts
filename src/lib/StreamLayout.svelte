<script lang="ts">
	import { browser } from '$app/environment';
	import { ApiClient } from './ApiClient';
	import { themestore } from '$lib/stores/ThemeStore';
	import StreamBackground from './StreamBackground.svelte';
	import StreamData from './StreamData.svelte';
	import type { LayoutConf, LayoutTheme } from './models/LayoutConf';
	import Heartrate from './components/Heartrate.svelte';
	import { onMount } from 'svelte';
	import LayoutControls from './LayoutControls.svelte';

	export let layout: LayoutConf;
	export let theme: LayoutTheme = $themestore;
	let current_theme_name = theme.name

	let apiClient = new ApiClient('https://api.dev.vauhtijuoksu.fi');

	onMount(async () => {
		const interval = setInterval(() => {
			let new_theme = $themestore;
			if (new_theme.name != current_theme_name){
		   		theme = new_theme;
			   	current_theme_name = theme.name
			}

		}, 1000)

		return async () => clearInterval(interval);
	});

	$: if (browser && theme?.fonts) {
		theme.fonts.forEach(async (font) => {
			const newFont = new FontFace(font.family, `url(${font.url})`, font.descriptors);
			const fontFace = await newFont.load();
			document.fonts.add(fontFace);
		});
	}
</script>

<div class="layout" style={theme.style}>
	<div class="background" style="{layout.background?.style ?? ''}">
		<slot name="background">
			<StreamBackground width={layout.width} height={layout.height} {...layout.background} {theme} />
		</slot>
	</div>
	<div class="content" style="width: {layout.width}px; height: {layout.height}px;">
		<StreamData client={apiClient} contents={layout.contents}>
			<slot name="foreground" />
		</StreamData>
	</div>
</div>

<div class="controls" style="top: {layout.height}px; left: 0; width: {layout.width}px; {theme.style}">
	<LayoutControls {theme}>
		{#if $$slots.controls}
			<slot name="controls" />
		{/if}
	</LayoutControls>
</div>

<style>
	:global(body),
	:global(html) {
		background-color: transparent;
		margin: 0;
		padding: 0;
		text-align: center;
		overflow: hidden;
	}

	.controls {
		margin-top: 5px;
		position: absolute;
		display: flex;
		flex-direction: row;
		color: black;
		background-color: white;
	}

	.controls > * {
		padding-top: 5px;
		white-space: nowrap;
	}

	.layout {
		position: absolute;
		top: 0;
		left: 0;
		overflow: visible;
	}

	.content {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		font-family: var(--font-family);
		color: var(--font-color);
		text-shadow: var(--text-shadow);
		overflow: hidden;
	}

	:global(div) {
		box-sizing: border-box;
	}


    :global(.abs) {
        position: absolute;
    }
    :global(.col) {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        overflow: hidden;
    }

    :global(.row) {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        overflow: hidden;
    }
		:global(.row.overflow) {
			overflow: visible;
		}
		:global(.debug) {
			border: 1px solid red;
		}
		:global(.debug .debug) {
			border-color: blue;
		}

		:global(.debug .debug .debug) {
			border-color: greenyellow;
		}

		:global(.debug .debug .debug .debug) {
			border-color: plum;
		}
</style>
