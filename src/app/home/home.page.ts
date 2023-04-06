/** @format */

import { NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { trigger, transition, animate, style, state } from "@angular/animations";

import { animal_obj, animais, respostas, arr_perguntas, perguntas } from "./animais";

@Component({
	selector: "app-home",
	templateUrl: "home.page.html",
	styleUrls: ["home.page.scss"],
	standalone: true,
	imports: [IonicModule, NgFor, NgIf],
	animations: [
		trigger("Exit", [
			transition(":enter", [style({ opacity: 0 }), animate("0.5s", style({ opacity: 1 }))]),
			transition(":leave", [animate("0.7s", style({ transform: "translateY(-100%)" }))]),
		]),

		trigger("Ans", [
			transition(":enter", [style({ opacity: 0 }), animate("1s 0.9s", style({ opacity: 1 }))]),
			transition(":leave", [animate("1s", style({ transform: "translateY(-100%)" }))]),
		]),

		trigger("TextChange", [
			transition("* => *", [style({ opacity: 0 }), animate("0.8s", style({ opacity: 1 }))]),
		]),
	],
})
export class HomePage {
	debug = false;

	animals = animais;
	start: boolean = false;

	j: number = 0;

	perguntas: arr_perguntas = perguntas;

	p_atual? = this.perguntas;

	adivinhado?: string;

	img_obj? = new Map<string, string>();

	constructor() {}

	StoreANS(ans: boolean) {
		respostas.push(ans);
		console.log(respostas);
	}

	Unmount(ans: boolean) {
		if (ans == true && this.p_atual) {
			this.p_atual = this.p_atual[1];
		} else if (ans == false && this.p_atual) {
			this.p_atual = this.p_atual[2];
		}
		if (this.p_atual && this.p_atual[0].match("Resposta")) {
			this.adivinhado = this.p_atual[0];

			for (let i = 0; i < animais.length; i++) {
				if (this.adivinhado.match(animais[i].name)) {
					this.img_obj?.set("src", animais[i].photo);
					this.img_obj?.set("alt", animais[i].name);
					this.img_obj?.set("link", animais[i].link);
					break;

					//this.img_obj?.img = `ddd`
				}
			}

			this.p_atual = [`end`];
		} else if (this.p_atual == undefined) {
			this.p_atual = [`end`];
		}
		this.p_atual[0];
		console.log(this.p_atual);
	}
}

/**
 *     let p_atual
    let teste = this.p_atual.reduce(
      function(acumulador: any, v_atual: any){
        console.log(acumulador)
        console.log(v_atual)

        p_atual = v_atual

        return  acumulador
      }
    )

    p_atual == undefined? '':

    this.p_atual = p_atual
    console.log(p_atual)
    return teste;
 */
