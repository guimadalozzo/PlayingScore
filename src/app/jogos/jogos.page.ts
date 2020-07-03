import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.page.html',
  styleUrls: ['./jogos.page.scss'],
})
export class JogosPage implements OnInit {
  
	gamesData: any;

	constructor(public apiService: ApiService) { 
		this.gamesData = [];
	}

	ngOnInit() { }

	ionViewWillEnter() {
		// Used ionViewWillEnter as ngOnInit is not 
		// called due to view persistence in Ionic
		this.getAllGames();
	}

	getAllGames() {
		//Get saved list of students
		this.apiService.getList().subscribe(response => {
			console.log(response);
			this.gamesData = response;
		})
	}
}

