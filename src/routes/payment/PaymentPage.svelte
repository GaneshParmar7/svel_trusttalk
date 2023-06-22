<script>
    import { TileGroup, RadioTile, Button, ImageLoader } from "carbon-components-svelte";
	import Paypal from "./Paypal.svelte";
	import CreditCard from "./CreditCard.svelte";
  
    const values = ["Paypal", "CreditCard"];
  
    let selected = values[0];
  </script>
  
  <div class="main">

        <div class="payment_mode_radio_group">
            <TileGroup legend="Select Payment Method" bind:selected>
                <!-- {#each values as value}
                <RadioTile {value}>{value}</RadioTile>
                {/each} -->
                <RadioTile value={values[0]}><img src="images/paypal-color-icon.png" width="50" alt="paypal"/> <p>{values[0]}</p></RadioTile>
                <RadioTile value={values[1]}><img src="images/credit-card-icon.png" width="40" alt="creditcard"/><p>CreditCard</p></RadioTile>
        
            </TileGroup>
            
            <div class="payment_summary">

                <h5>You have to pay</h5>
                <h2>$2000</h2>

            </div>


        </div>
        
        <div class="payment_form">
            {#if selected=="Paypal"}
                    <Paypal />
                    {:else}
                    <CreditCard />
                {/if}

        </div>

  </div>    

  
  
  <style>

    .main{
        display: flex;
        margin: 1em;
        max-width: 900px;
        width: 100%;
        margin: 0 auto;
        gap: 4em;
        justify-content: space-evenly;
    }

    .payment_mode_radio_group{
        margin: 0.5em;
        width: 100%;
        max-width: 300px;
        
    }

    .payment_summary{
        margin-top: 5em;
        padding: 2em;
        background-color: #d2d3d647;
    }

    .payment_form{
        flex: 1;
        margin: 3em;
    }

    @media(max-width: 768px){
        .main{
            display: block;
        }
        .payment_form{
            /* margin: 0.5em; */
            margin-top: 2em;
        }
        .payment_mode_radio_group{
            margin: 0 auto;
        }
    }
  </style>
  