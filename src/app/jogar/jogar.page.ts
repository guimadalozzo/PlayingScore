import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-jogar',
	templateUrl: './jogar.page.html',
	styleUrls: ['./jogar.page.scss'],
})

export class JogarPage implements OnInit {
	
	JOGADORES = [
		{Id: 0, Name: "Guilherme", Score: 0},
		{Id: 0, Name: "Fernanda", Score: 0},
		{Id: 0, Name: "Lucca", Score: 0},
		{Id: 0, Name: "Pietro", Score: 0},
		{Id: 0, Name: "Alguem", Score: 0},
		{Id: 0, Name: "Alguem", Score: 0},
		{Id: 0, Name: "Alguem", Score: 0},
		{Id: 0, Name: "Alguem", Score: 0},
		{Id: 0, Name: "Alguem", Score: 0},
		{Id: 0, Name: "Alguem", Score: 0},
		{Id: 0, Name: "Alguem", Score: 0},
		{Id: 0, Name: "Alguem", Score: 0},
		{Id: 0, Name: "Alguem", Score: 0},
		{Id: 0, Name: "Alguem", Score: 0},
		{Id: 0, Name: "Alguem", Score: 0},
		{Id: 0, Name: "Alguem", Score: 0},
		{Id: 0, Name: "Alguem", Score: 0},
		{Id: 0, Name: "Alguem", Score: 0},
		{Id: 0, Name: "Alguem", Score: 0},
		{Id: 0, Name: "Alguem", Score: 0},
		{Id: 0, Name: "Alguem", Score: 0},
		{Id: 0, Name: "Alguem", Score: 0},
		{Id: 0, Name: "Alguem", Score: 0}
	]
	QtdJogadores: number;
	Jogadores: string[] = [];

  	constructor() {
		this.QtdJogadores = 0;
  	}
	
	updateTotalPlayers(value) {
		this.QtdJogadores = value;
		this.Jogadores = [];
		for (let i = 0; i<this.QtdJogadores; i++) {
			this.Jogadores[i] = this.JOGADORES[i].Name;
			console.log(this.JOGADORES[i].Name);
		}
	}
	
  	ngOnInit() {}

}

