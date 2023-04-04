/** @format */

import { NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { } from "@angular/animations"

import { animal_obj, animais, respostas, perguntas } from "./animais";

@Component({
	selector: "app-home",
	templateUrl: "home.page.html",
	styleUrls: ["home.page.scss"],
	standalone: true,
	imports: [IonicModule, NgFor, NgIf],
  animations: [
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ]),
  ]
})
export class HomePage {
	debug = true;

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

