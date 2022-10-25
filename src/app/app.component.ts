import { Component, forwardRef } from '@angular/core';
import {
  provideFluentDesignSystem,
  fluentCard,
  fluentSelect,
    fluentOption
} from "@fluentui/web-components";
provideFluentDesignSystem()
    .register(
        fluentCard()
    );
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'fluent-angular';

  exampleTextField = '';

  onClick() {
    console.log(this.exampleTextField);
  }
}
