import { Component } from '@angular/core';

import { HeaderMenu } from '../header-menu/header-menu';

@Component({
  imports: [HeaderMenu],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {}
