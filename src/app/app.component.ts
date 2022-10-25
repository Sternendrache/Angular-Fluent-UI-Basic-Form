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
    provideFluentDesignSystem()
    .register(
        fluentSelect({
          indicator: `...your indicator...`
        }),
        fluentOption()
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
