<script lang="ts">
	import { browser } from '$app/environment';
	import { ApiClient } from './ApiClient';
	import { themestore } from '$lib/stores/ThemeStore';
	import StreamBackground from './StreamBackground.svelte';
	import StreamData from './StreamData.svelte';
	import type { LayoutConf, LayoutTheme } from './models/LayoutConf';
	import Heartrate from './components/Heartrate.svelte';
	import { fixedPlayerNames, hideGameData } from './stores/ConfStore';
	import { onMount } from 'svelte';

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

<div class="controls" style="top: {layout.height}px; left: 0; width: {layout.width}px;">
	<div class="col">
		<div style="height: 65px; width: 300px;">
			<Heartrate />
		</div>
		<div>
			Current theme: {theme.name}
		</div>
		<div>
			<label>
				<input type="checkbox" bind:checked={$fixedPlayerNames}>
				Fixed player names
			</label>
		</div>
		<div>
			<label>
				<input type="checkbox" bind:checked={$hideGameData}>
				Hide game data
			</label>
		</div>
	</div>
	{#if $$slots.controls}
	<div class="col">
		<h1>Extra controls</h1>
		<div>
			<slot name="controls" />
		</div>
	</div>
	{/if}
</div>

<style>
	:global(body),
	:global(html) {
		background-color: transparent;
		margin: 0;
		padding: 0;
		text-align: center;
	}

	.controls {
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
</style>
