<script lang="ts">
	import {
		breakpointObserver,
		Row,
		Column,
		OverflowMenu,
		OverflowMenuItem
	} from 'carbon-components-svelte';
	import { dataServerURL, trusttalkLogo } from '../config';
	import { getCookie } from 'svelte-cookie';

	// const jwtToken = getCookie('jwt');
	// const payload = parseJwt(jwtToken);

	// function parseJwt(token) {
	// 	try {
	// 		var base64Url = token.split('.')[1];
	// 		var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
	// 		var jsonPayload = decodeURIComponent(
	// 			window
	// 				.atob(base64)
	// 				.split('')
	// 				.map(function (c) {
	// 					return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
	// 				})
	// 				.join('')
	// 		);

	// 		return JSON.parse(jsonPayload);
	// 	} catch (error) {
	// 		console.error({ error });
	// 	}
	// }

	const size = breakpointObserver();
	const smaller = size.smallerThan('md');
</script>

<div class="header">
	<img id="logo_header" src={trusttalkLogo} alt="TrustTalk_logo" class="flex-start" />

	<div class="flex-end">
		{#if $smaller}
			<OverflowMenu flipped>
				<button slot="menu" class="tt-nav-bar">
					<i class="fa-solid fa-bars" />
				</button>
				<OverflowMenuItem href="/subscription" text="Subscription" />
				<OverflowMenuItem href={dataServerURL} text="Home" />
				<OverflowMenuItem href="/wallet" danger text="Wallet" />
			</OverflowMenu>
		{:else}
			<Row>
				<Column padding><a href="/subscription">Subscription</a></Column>
				<Column padding><a href={dataServerURL}> Home </a></Column>
				<Column padding><a href="/wallet"> Wallet </a></Column>
				<Column padding><a href="/about"> About </a></Column>
			</Row>
			<!-- {#if payload.photo}
				<Column>
					<img class="profile_picture" src={payload.photo} alt="" />
				</Column>
			{:else}
				<Column>
					<img class="profile_picture" alt="profile_picture" />
				</Column>
			{/if} -->
		{/if}
	</div>
</div>

<style>
	a {
		color: #212529;
		text-decoration: none;
		/* font-family: 'Merriweather Sans', sans-serif; */
		font-family: 'Merriweather Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			'Segoe UI Symbol', 'Noto Color Emoji';
		font-weight: 700;
		font-size: 0.9rem;
	}

	a:hover {
		color: #f4623a;
	}

	.flex-end {
		text-align: center;
		align-items: center;
		display: flex;
	}

	.profile_picture {
		background-color: transparent;
		border-color: transparent;
		padding: 0;
		height: auto;
		width: 50px;
		border-radius: 50px;
		margin-left: 50px;
	}

	#logo_header {
		height: auto;
		width: auto;
	}

	.header {
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 12vh;
		padding: 8px 16px 8px 120px;
	}

	@media (max-width: 1000px) {
		.header {
			padding: 16px;
		}
	}
</style>
