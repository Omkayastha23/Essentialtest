import { LightningElement, track, api } from 'lwc';

export default class TestClass extends LightningElement {

    @api recordId;
    @track message = "This is a test message";

    handleEvent(event){
            this.message = event.target.value;
    }
}