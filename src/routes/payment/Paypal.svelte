<script>
	import { Form ,ImageLoader, Button, DatePicker, DatePickerInput, FormGroup, NumberInput, PasswordInput, TextInput, FormLabel} from "carbon-components-svelte";

</script>
<div class="text-center">
    <img src="images/paypal-icon.png" alt="paypal" width="150"/>
    
    <p>Login to Paypal</p>

</div>

<Form style="margin:1em; box-shadow: 0 0 10px gray;padding: 1em;border-radius: 8px;">
    <FormGroup legendText="Email address">
        <TextInput placeholder=""/>
    </FormGroup>
    <FormGroup>
        <PasswordInput labelText="Password"/>
    </FormGroup>
    <FormGroup>
        <Button kind="primary" style="display:block; margin: 0 auto;">Login</Button>
    </FormGroup>
    
</Form>

<style>
    
    .text-center{
        text-align: center;
    }
</style>