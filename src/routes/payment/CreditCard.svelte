<script>
	import { Button, DatePicker, DatePickerInput, Form, FormGroup, NumberInput, PasswordInput, TextInput } from "carbon-components-svelte";

</script>
<h1 class="text-center">Payment</h1>

<Form style="margin:1em; box-shadow: 0 0 10px gray;padding: 1em;border-radius: 8px;">
    <FormGroup legendText="Card Holder Name">
        <TextInput placeholder="John Doh"/>
    </FormGroup>
    <FormGroup legendText="Card Number" >
        <div class="flex align-center">
            <img src="images/visa-icon.png" alt="visa" width="50"/>
            <NumberInput   hideSteppers={true} />

        </div>
    </FormGroup>
    <div class="flex">

        <DatePicker style="width:100%;" datePickerType="single" on:change>
            <DatePickerInput style="width:100%;" labelText="Expiry date" placeholder="mm/yyyy"  />
          </DatePicker>
        <FormGroup legendText="Cvv">
            <PasswordInput/>
        </FormGroup>
    </div>
    
    <Button kind="primary" class="btn" style="width:100%; display:block;margin:0 auto;text-align:center;">Pay Now</Button>
    
</Form>

<style>
    .flex{
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 1em;
    }
    .align-center{
        align-items: center;
        
    }

    .text-center{
        text-align: center;
    }

    .btn{
        border: 1px solid #f4623a;
        border-radius: 10px;
        color: #f4623a;
        display: inline-block;
        margin: 25px 0;
        padding: 15px 35px;
        text-decoration: none;
        transition: all 150ms ease-in-out;

    }
</style>