import { Component } from '@angular/core';

@Component({
	selector: 'app-tabs',
	templateUrl: 'tabs.page.html',
	styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  	PerfilNotifications: number;

  	constructor() {
    	this.PerfilNotifications = 0;
  	}
}

