<script lang="ts">
	import {
		Button,
		ComposedModal,
		ModalBody,
		TileGroup,
		RadioTile,
		ModalHeader,
		ContentSwitcher,
		Switch
	} from 'carbon-components-svelte';
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';

	let status = 'hover';
	let tstatus = 'tap';

	const menu = ['Block', 'Charge', 'End', 'Refund'];

	const blockValues = ['Block user permanently', 'Block user for 1month'];
	let selectedBlockValue = blockValues[0];
	const chargeValues = ['Request Amount to continue: '];
	let selectedChargeValue = chargeValues[0];
	const endValues = ['End this conversation'];
	let selectedEndValue = endValues[0];
	const refundValues = ['Refund $_____ ', 'Refund partial $_____ ', 'Refund $_____  and block'];
	let selectedRefundValue = refundValues[0];

	let openMenuModal = false;
	let selectedOption = '';

	function openMenu(option: string) {
		selectedOption = option;
		openMenuModal = true;
	}
</script>

{#each menu as option}
	<Motion
		whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
		onHoverStart={(_) => (status = 'hover started')}
		onHoverEnd={(_) => (status = 'hover ended')}
		whileTap={{ rotate: 45, transition: { duration: 1 } }}
		onTapStart={(_) => (tstatus = 'tap started')}
		onTap={(_) => (tstatus = 'tap succesfull')}
		onTapCancel={(_) => (tstatus = 'tap cancelled')}
		let:motion
	>
		<button use:motion class="tt-menuBtn" on:click={() => openMenu(option)}>{option}</button>
	</Motion>
{/each}

<ComposedModal bind:open={openMenuModal}>
	<button class="closeBtn" on:click={() => (openMenuModal = false)}>X</button>
	<ModalBody class="tt-menu-body">
		{#if selectedOption === 'Block'}
			<TileGroup legend="Restrict Menu" bind:selected={selectedBlockValue}>
				<ContentSwitcher class="tt-menu-switcher">
					{#each menu as option}
						<Switch text={option} class="tt-menuBtn" on:click={() => openMenu(option)}
							>{option}</Switch
						>
					{/each}
				</ContentSwitcher>
				<div>
					{#each blockValues as value}
						<RadioTile {value}>{value}</RadioTile>
					{/each}
				</div>
			</TileGroup>

			<Button size="small" on:click={() => (selectedBlockValue = blockValues[0])}>
				Confirm - {selectedBlockValue}
			</Button>
		{:else if selectedOption === 'Charge'}
			<TileGroup legend="Charge Menu" bind:selected={selectedChargeValue}>
				<ContentSwitcher class="tt-menu-switcher">
					{#each menu as option}
						<Switch class="tt-menuBtn" on:click={() => openMenu(option)}>{option}</Switch>
					{/each}
				</ContentSwitcher>
				{#each chargeValues as value}
					<RadioTile {value}>{value}</RadioTile>
				{/each}
			</TileGroup>

			<Button size="small" on:click={() => selectedChargeValue}>
				Confirm - {selectedChargeValue}
			</Button>
		{:else if selectedOption === 'End'}
			<TileGroup legend="End Conversation" bind:selected={selectedEndValue}>
				<ContentSwitcher class="tt-menu-switcher">
					{#each menu as option}
						<Switch class="tt-menuBtn" on:click={() => openMenu(option)}>{option}</Switch>
					{/each}
				</ContentSwitcher>
				{#each endValues as value}
					<RadioTile {value}>{value}</RadioTile>
				{/each}
			</TileGroup>

			<Button size="small" on:click={() => selectedEndValue}>
				Confirm - {selectedEndValue}
			</Button>
		{:else if selectedOption === 'Refund'}
			<TileGroup legend="Refund Menu" bind:selected={selectedRefundValue}>
				<ContentSwitcher class="tt-menu-switcher">
					{#each menu as option}
						<Switch class="tt-menuBtn" on:click={() => openMenu(option)}>{option}</Switch>
					{/each}
				</ContentSwitcher>
				{#each refundValues as value}
					<RadioTile {value}>{value}</RadioTile>
				{/each}
			</TileGroup>

			<Button size="small" on:click={() => selectedRefundValue}>
				Confirm - {selectedRefundValue}
			</Button>
		{/if}
	</ModalBody>
</ComposedModal>
