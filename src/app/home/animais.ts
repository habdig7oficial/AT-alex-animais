/** @format */

export interface animal_obj {
	name: string;
	photo: string;
	link: string;
}

/*
export interface int_perguntas{
  pergunta?: string,

  Snext?: int_perguntas,
  Nnext?: int_perguntas,

  asn?: boolean,
}
*/

export type arr_perguntas = [string, arr_perguntas?, arr_perguntas?];

export let animais = [
	{
		name: "papagaio",
		photo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Papagaio-verdadeiro.jpg",
		link: "https://brasilescola.uol.com.br/animais/papagaio-verdadeiro.htm",
	},
	{
		name: "crocodilo",
		photo: "https://cdn.pixabay.com/photo/2014/01/14/18/31/nile-crocodile-245013_1280.jpg",
		link: "https://brasilescola.uol.com.br/biologia/ordem-crocodilia.htm",
	},
	{
		name: "gato",
		photo: "https://www.hypeness.com.br/1/2022/02/e22af62f-edit_gatos_fatos_rawpixel2.jpg",
		link: "https://brasilescola.uol.com.br/animais/gato.htm",
	},
	{
		name: "girafa",
		photo: "https://live.staticflickr.com/1591/24642066472_8c60e01f4d_b.jpg",
		link: "https://brasilescola.uol.com.br/animais/girafa.htm",
	},
	{
		name: "urso",
		photo: "https://cdn.pixabay.com/photo/2014/08/22/14/09/bear-424383_1280.jpg",
		link: "https://brasilescola.uol.com.br/animais/urso-pardo.htm",
	},
	{
		name: "pinguim",
		photo: "https://cdn.pixabay.com/photo/2019/12/17/17/31/donkey-penguin-4702115_1280.jpg",
		link: "https://brasilescola.uol.com.br/animais/pinguins.htm",
	},
	{
		name: "gnu",
		photo: "https://cdn.pixabay.com/photo/2020/03/04/04/14/gnu-4900473_1280.jpg",
		link: "https://www.gnu.org/",
	},
];

export let prototype: Array<string> = [];

export let perguntas: arr_perguntas = [
	"O seu animal tem penas?",
	[
		"O seu animal pode voar?",
		["Resposta: O seu animal é um papagaio."],
		["Resposta: O seu animal é um pinguim."],
	],
	[
		"O seu animal é um mamífero?",
		[
			"O seu animal é doméstico?",
			["Resposta: O seu animal é um gato."],
			[
				"O seu animal vive em ambientes de clima frio?",
				["Resposta: O seu animal é um urso."],
				[
					"O seu animal tem manchas sobre o corpo?",
					["Resposta: O seu animal é uma girafa."],
					["Resposta: O seu animal é um gnu."],
				],
			],
		],
		["Resposta: O seu animal é um crocodilo."],
	],
];

export let respostas: Array<boolean> = [];
