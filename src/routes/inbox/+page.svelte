<script lang="ts">
	import { DataTable, OverflowMenu, OverflowMenuItem, Pagination } from 'carbon-components-svelte';

	import { breakpointObserver, breakpoints } from 'carbon-components-svelte';

	import { headers } from './headers.js';
	import { goto } from '$app/navigation';

	import { formatted_date, renderFullName } from '$lib/components/formatters';

	import DotMark from 'carbon-icons-svelte/lib/DotMark.svelte';
	import Header from '$lib/common/Header.svelte';

	import type { PageData } from './$types';

	import './inbox.css';

	export let data: PageData;

	let pageSize = 12;
	let page = 1;

	function rowClickHandler(e: any) {
		//e.detail['is_read'] = true;
		let row = data.inbox.find((x) => x.id === e.detail.id);
		row.is_read = true;
		row.isModified = true;
		// data.inbox.find((x) => x.id === e.detail.id).set('is_read', true);
		// data.inbox[0].set('is_read', true);
		data.inbox = data.inbox; // refresh UI
		goto('/inbox/conversation/' + e.detail.id);
	}

	function markUnread(row: any) {
		row.is_read = false;
		row.isModified = true;
		data.inbox = data.inbox; // refresh UI
	}

	const size = breakpointObserver();
	const smaller = size.smallerThan('md');
	const larger = size.largerThan('md');

	// async function getCurrentSubscription() {
        
    //     const res = await fetch('http://localhost:3000/subscription_plans');
    //     const data = await res.json();

    //     if(res.ok){
    //         return data;
    //     }
    //     else{
    //         throw new Error(data);
    //     }

    // }

	// getCurrentSubscription()

</script>

<body>
	<Header />

	<DataTable {pageSize} {page} rows={data.inbox} {headers} sortable on:click:row={rowClickHandler}>
	<svelte:fragment slot="cell" let:row let:cell>
		{#if cell.key === 'photo'}
			<img src={cell.value} alt={cell.value} />
		{:else if cell.key === 'date_time'}
				{formatted_date(cell.value)}
		{:else if cell.key === 'is_read'}
				<!-- <CircleFilled fill={cell.value ? 'white' : 'red'} class="icon" /> -->
				{#if cell.value == false}
					<DotMark fill="#F4623A" class="icon" size={16} />
				{/if}
			{:else if cell.key === 'first_name'}
				{@html renderFullName(row)}
			{:else if cell.key === 'message_text'}
				{@html '<pre class="ellipsis">' + cell.value + '</pre>'}
		{:else}
			{cell.value}
		{/if}
	</svelte:fragment>

		<svelte:fragment slot="expanded-row" let:row>
			<pre>{row.message_text}</pre>
		</svelte:fragment>
	</DataTable>

	<Pagination bind:pageSize bind:page totalItems={data.inbox.length} pageSizeInputDisabled />
</body>

<style>
	body {
		min-width: fit-content;
		min-height: 100vh;
	}
	img {
		max-width: 50px;
		max-height: 50px;
		border-radius: 50%;
	}

</style>