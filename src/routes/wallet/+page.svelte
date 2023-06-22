<script lang="ts">
	import { DataTable, Pagination, NumberInput, Dropdown, Button } from 'carbon-components-svelte';
	import { Grid, Row, Column } from 'carbon-components-svelte';
	import Header from '$lib/common/Header.svelte';
	import { headers } from './headers';
	import { _pushWalletEntries } from './+page';

	import { formatted_date } from '$lib/components/formatters';

	import { Wallet } from './wallet';

	import type { PageData } from './$types';
	export let data: PageData;
	console.log(data);

	let pageSize = 10;
	let page = 1;

	let value = 0;
	let walletEntries = [];
	console.log(data);

	export function add_balance() {
		let wallet_balance = data.wallet[data.wallet.length - 1].wallet_amount + value;
		console.log(wallet_balance);
		let id = data.wallet[data.wallet.length - 1].id + 1;

		let description = 'Added money to wallet!';
		data.wallet.push(new Wallet(value, description, wallet_balance, id));
		data = data;
		_pushWalletEntries();

		value = 0;
	}
</script>

<body>
	<Header />

	<Grid>
		<Row>
			<Column sm={4} md={6} lg={8}>
				<NumberInput
					label="Amount (minimum 0)"
					min={0}
					bind:value
					helperText="Add balance to the wallet"
				/>
				<Button on:click={() => add_balance()}>Add to Wallet</Button>
			</Column>
		</Row>
	</Grid>

	<p>{walletEntries}</p>

	<DataTable {pageSize} {page} rows={data.wallet} {headers} sortable>
		<svelte:fragment slot="cell" let:row let:cell>
			{#if cell.key === 'date'}
				{formatted_date(cell.value)}
			{:else}
				{cell.value}
			{/if}
		</svelte:fragment>
	</DataTable>
	<Pagination bind:pageSize bind:page totalItems={data.wallet.length} pageSizeInputDisabled />
</body>

<style>
	body {
		min-width: fit-content;
		min-height: 100vh;
	}
</style>
