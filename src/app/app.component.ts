import { Component, forwardRef } from '@angular/core';
import {
  provideFluentDesignSystem,
  fluentCard,
  fluentAccordion,
  fluentAccordionItem,
  fluentCheckbox,
  fluentSelect,
  fluentCombobox,
  fluentOption,
  fluentTextField,
  fluentNumberField,
  fluentProgressRing,
  fluentRadio,
  fluentRadioGroup,
  fluentSwitch,
  fluentTextArea,
} from '@fluentui/web-components';
provideFluentDesignSystem().register(
  fluentTextField(),
  fluentCard(),
  fluentAccordion(),
  fluentAccordionItem(),
  fluentCheckbox(),
  fluentSelect(),
  fluentCombobox(),
  fluentOption(),
  fluentNumberField(),
  fluentProgressRing(),
  fluentRadio(),
  fluentRadioGroup(),
  fluentSwitch(),
  fluentTextArea()
);
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'fluent-angular';

  exampleTextField = '';
  onClick() {
    console.log(this.exampleTextField);
  }
}
