import { Component, Input, OnInit } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection } from 'angularfire2/firestore';

interface Player {
	Id: number,  
	Name: string,
	Score: number
}

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html',
    styleUrls: ['./contador.component.scss'],
})
export class ContadorComponent implements OnInit {

    playerCollectionRef: AngularFirestoreCollection<Player>;

    @Input() Id: number;
    @Input() Name: string;
    @Input() Score: number;

	constructor(afs: AngularFirestore) {
		this.playerCollectionRef = afs.collection('players');
	}

    updateFirebaseScore() {
		this.playerCollectionRef.get().subscribe((snapshot) => {
            snapshot.forEach(doc => {
                if (doc.data().Id == this.Id) 
                    this.playerCollectionRef.doc(doc.id.toString()).update({ Score: this.Score });
            });
        })
    }

    remover() {
		this.playerCollectionRef.get().subscribe((snapshot) => {
            snapshot.forEach(doc => {
                if (doc.data().Id == this.Id) 
                    this.playerCollectionRef.doc(doc.id.toString()).delete();
            });
        })
    }

	increment() {
		this.Score++;
        this.updateFirebaseScore();
	}
	
	decrement() {
        if (this.Score > 0) {
		    this.Score--;
            this.updateFirebaseScore();
        }
	}

    ngOnInit() {}

}

