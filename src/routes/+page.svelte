<script>
	// @ts-nocheck
	import videojs from 'video.js';

	import { onMount } from 'svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	onMount(() => {
		if (data.obj.source) {
			var source = data.obj.source;
			const player = videojs('my-player');
			player.fluid(true);
			player.responsive(true);
			player.ready(() => {
				player.src({
					src: source,
					type: 'application/dash+xml'
				});
			});
		}
	});

	export function opennewtab() {
		const form_value = document.getElementById('id').value;
		const url = new URL(form_value);
		// var video_id = url.searchParams.get('id');
		var paths = url.pathname;
		const path_decode = paths.split('/');
		const video_id = path_decode[3];
		// console.log(video_id);
		const redirect_path = '?id=' + video_id;
		location.href = redirect_path;
	}
</script>

<svelte:head>
	{#if data.obj.filename}
		<title>{data.obj.filename} | Mdisk Watch</title>
		<meta name="description" content="Svelte demo app" />
		<meta name="msapplication-TileColor" content="#2483d5" />
		<meta name="theme-color" content="#2483d5" />

		<!-- Primary Meta Tags -->
		<title>{data.obj.filename} | Mdisk Watch</title>
		<meta name="title" content="{data.obj.filename} | Mdisk Watch" />
		<meta name="description" content="Watch {data.obj.filename} in Mdisk Watch" />

		<!-- Open Graph / Facebook -->
		<meta property="og:type" content="website" />
		<meta property="og:title" content="{data.obj.filename} | Mdisk Watch" />
		<meta property="og:description" content="Watch {data.obj.filename} in Mdisk Watch" />
		<meta
			property="og:image"
			content="https://cdn.statically.io/og/theme=dark/{data.obj.filename} in Mdisk Watch.jpg"
		/>

		<!-- Twitter -->
		<meta property="twitter:card" content="summary_large_image" />
		<meta property="twitter:title" content="{data.obj.filename} | Mdisk Watch" />
		<meta property="twitter:description" content="Watch {data.obj.filename} in Mdisk Watch" />
		<meta
			property="twitter:image"
			content="https://cdn.statically.io/og/theme=dark/{data.obj.filename} in Mdisk Watch.jpg"
		/>
	{/if}
</svelte:head>

<section>
	{#if data.obj.filename}
		<b
			><h1>
				{data.obj.filename}
			</h1>
		</b>
		<!-- svelte-ignore a11y-media-has-caption -->
		<video
			id="my-player"
			class="video-js vjs-16-9 vjs-big-play-centered rcorners1"
			controls
		>
			<p class="vjs-no-js">
				To view this video please enable JavaScript, and consider upgrading to a web browser that
				<a href="https://videojs.com/html5-video-support/" target="_blank" rel="noreferrer">
					supports HTML5 video
				</a>
			</p>
		</video>
		<p class="text-left pt-4">Play:</p>
		<div class="btn-group" role="group" aria-label="Basic mixed styles example">
			<a
				class="btn btn-primary"
				href="intent:{data.obj
					.source}#Intent;action=com.mxtech.videoplayer.ad.playback_local;category=android.intent.category.DEFAULT;category=android.intent.category.BROWSABLE;package=com.mxtech.videoplayer.ad;b.decode_mode=2;S.mx_stream_url={data
					.obj.source};S.title={data.obj.filename};end">Mxplayer</a
			>
			<a class="btn btn-warning" href="vlc://{data.obj.source}">Vlc Mobile</a>
		</div>
		<p class="text-left pt-3">Download:</p>

		<div class="btn-group" role="group" aria-label="Basic mixed styles example">
			<a
				class="btn btn-primary"
				href="intent:{data.obj
					.download}#Intent;action=com.mxtech.videoplayer.ad.download;category=android.intent.category.DEFAULT;category=android.intent.category.BROWSABLE;package=com.mxtech.videoplayer.ad;b.decode_mode=2;S.title={data
					.obj.filename};end"
			>
				Download with Mxplayer
			</a>
		</div>
		<b class="pt-3">
			In Mobiles Videos Can be only downloaded with Mxplayer <br /><br />
			In Pc Videos Can be only downloaded with IDM
		</b>
	{:else}
		<div class="mb-3">
			<label for="exampleInputEmail1" class="form-label">Enter Mdisk.me URL</label>
			<input type="text" class="form-control" id="id" />
		</div>
		<button type="buttton" class="btn btn-light" on:click={opennewtab}>Submit</button>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
	.rcorners1 {
		border-radius: 15px;
	}
</style>
