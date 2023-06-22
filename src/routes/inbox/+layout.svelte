<script lang="ts">
	import { toasts, showToast } from '$lib/components/toaster';
	import { ToastNotification } from 'carbon-components-svelte';

    
</script>

<slot />

{#each $toasts as t}
	<div class="tt-toast">
		<ToastNotification kind="info" title={t.title} subtitle={t.subtitle} caption={t.caption} />
	</div>
{/each}

<style>
	.tt-toast {
		position: fixed;
		bottom: 20px;
		right: 20px;
	}
</style>
