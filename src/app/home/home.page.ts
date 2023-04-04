/** @format */

import { NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { trigger, transition, animate, style } from "@angular/animations"


import { animal_obj, animais, respostas, perguntas } from "./animais";

@Component({
	selector: "app-home",
	templateUrl: "home.page.html",
	styleUrls: ["home.page.scss"],
	standalone: true,
	imports: [IonicModule, NgFor, NgIf],
  animations:[
    trigger('Exit', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('0.7s', style({ transform: 'translateY(-100%)' }))
      ])
    ]),

    trigger('Ans', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s 0.9s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1s', style({ transform: 'translateY(-100%)' }))
      ])
    ]),
  ]
})
export class HomePage {
	debug = false;

	animals = animais;
	start: boolean = false;
	perguntas: Array<string> = perguntas;

	j: number = 0;
	constructor() {}

	StoreANS(ans: boolean) {
		respostas.push(ans);
		console.log(respostas);
	}
}

