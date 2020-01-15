import { Component } from '@angular/core';

@Component({
  selector: 'app-kendo-testing',
  templateUrl: './kendo-testing.component.html',
  styleUrls: ['./kendo-testing.component.scss']
})
export class KendoTestingComponent {
    title = 'Hello from the Kendo Testing Component!';

    onButtonClick() {
        this.title = 'Hello from Kendo UI!';
    }
}
