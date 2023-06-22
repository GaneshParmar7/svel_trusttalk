<script lang="ts">
	import type { PageData } from './$types';
	import { fade, fly } from 'svelte/transition';
	import Menu from './Menu.svelte';
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte'

	let status = 'hover';
	let tstatus = 'tap';

	import {
		Grid,
		TextArea,
		Row,
		Column,
		Button,
		breakpointObserver,
		ComposedModal,
		OverflowMenu,
		OverflowMenuItem
	} from 'carbon-components-svelte';
	import { goto } from '$app/navigation';

	import { Conversation } from '../../message';
	import { _pushMessages } from '../../+layout';

	import Header from '$lib/common/Header.svelte';
	import './conversation.css';

	export let data: PageData;

	//  Carousel start

	import Carousel from 'svelte-carousel';

	let carousel;
	let openCarouselModal = false;

	function openCarousel() {
		openCarouselModal = true;
	}
	const handleNextClick = () => {
		carousel.goToNext();
	};
	function inbox() {
		goto('/inbox');
	}

	//  Carousel end

	let reply = '';

	function sendReply() {
		data.message.conversation.push(
			new Conversation(reply, data.message.to, data.message.linkedin_id_from)
		);
		data.message.isModified = true;
		data = data;
		_pushMessages();
		reply = '';

		//goto('/inbox/');
	}

	const size = breakpointObserver();
	const smaller = size.smallerThan('md');

	function selectText(text) {
		reply = text;
	}
</script>

<Header />

<ComposedModal bind:open={openCarouselModal}>
	<button class="closeBtn" on:click={() => openCarouselModal = false}>X</button>

	<div class="tt-carousel-center">
		<Carousel swiping bind:this={carousel}>
			<div class="tt-carousel-container">
				<img class="tt-carousel-photo" src={data.message.photo} alt="" />
			</div>
			<div class="tt-carousel-container">
				<img class="tt-carousel-photo" src={data.message.photo} alt="" />
			</div>
			<div class="tt-carousel-container">
				<img class="tt-carousel-photo" src={data.message.photo} alt="" />
			</div>
		</Carousel>
	</div>
</ComposedModal>

<main transition:fade class="tt-message-container">
	<Grid class="tt-message-inner-container">
		<Row class="tt-senders-profile-container">
			<Column sm={4} md={6} lg={8}>
				<div class="tt-senders-profile">
					<img class="tt-senders-photo" src={data.message.photo} alt="" />
					<div class="icons">
						{#if $smaller}
							<i class="fa-brands fa-linkedin fa-xl" />
							<i class="fa-brands fa-twitter fa-xl tt-text-black-50" />
							<i class="fa-brands fa-facebook fa-xl tt-text-black-50" />
							<i class="fa-brands fa-youtube fa-xl tt-text-black-50" />
							<i class="fa-brands fa-square-instagram fa-xl tt-text-black-50" />
							<i class="fa-brands fa-github fa-xl tt-text-black-50" />
						{:else}
							<i class="fa-brands fa-linkedin fa-2x" />
							<i class="fa-brands fa-twitter fa-2x tt-text-black-50" />
							<i class="fa-brands fa-facebook fa-2x tt-text-black-50" />
							<i class="fa-brands fa-youtube fa-2x tt-text-black-50" />
							<i class="fa-brands fa-square-instagram fa-2x tt-text-black-50" />
							<i class="fa-brands fa-github fa-2x tt-text-black-50" />
						{/if}
					</div>
				</div>
			</Column>
		</Row>

		<Row class="tt-message-window">
			<Column sm={2} md={4} lg={6} class="tt-flex-100">
				<!-- Temporary code for previewing the message from -->
				<div class="tt-message">
					{data.message.message_text}
					<button on:click={() => openCarousel()} class="attachmentImg">
						<i class="fa-solid fa-paperclip" />
					</button>
				</div>
				<!-- Temporary code for previewing the message from -->

				{#each data.message.conversation as message}
					<div class="tt-message" transition:fly={{ y: 100, duration: 500 }}>
						{message.message_text}
						<button on:click={() => openCarousel()} class="attachmentImg">
							<i class="fa-solid fa-paperclip" />
						</button>
					</div>
				{/each}
			</Column>
		</Row>

		<Row class="tt-menu-container">
			<Column sm={2} md={4} lg={6} class="tt-user-menu">
				<Menu />
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
					<button use:motion class="tt-inbox" on:click={() => inbox()}>Inbox</button>
				</Motion>
			</Column>
		</Row>
		<Row>
			<Column sm={2} md={4} lg={6} class="tt-textarea-container">
				<OverflowMenu direction="top">
					<Button slot="menu" class="tt-dropdown-button">
						<i class="fa-solid fa-caret-down" />
					</Button>
					<OverflowMenuItem
						on:click={() => selectText('Thank you for your message, will respond after some time.')}
						text="Thank you for your message, will respond after some time."
					/>
					<OverflowMenuItem on:click={() => selectText('Greetings.')} text="Greetings, " />
					<OverflowMenuItem
						on:click={() => selectText('I would like to know more about your project.')}
						text="I would like to know more about your project."
					/>
				</OverflowMenu>

				<TextArea
					class="tt-textarea"
					bind:value={reply}
					placeholder="Enter your reply"
					rows={5}
					cols={10}
					maxlength={1000}
					autofocus
				/>
				<Button class="tt-send-button" on:click={sendReply}>Reply</Button>
			</Column>
		</Row>
	</Grid>
</main>

<style>
	@import '@fortawesome/fontawesome-free/css/all.css';
</style>
