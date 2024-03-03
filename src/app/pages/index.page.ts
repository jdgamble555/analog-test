import { Component } from '@angular/core';
import { load } from './index.server';
import { injectLoad } from '@analogjs/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe],
  template: `
<h1 class="text-3xl font-bold underline mb-3">
  Hello, {{ title }}
</h1>
<p>{{ (data | async)?.data }}</p>
  `,
  styles: [],
})
export default class HomeComponent {

  title = 'angular-analog-vercel';
  data = injectLoad<typeof load>();

}
