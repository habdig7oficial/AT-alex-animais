/** @format */

export interface animal_obj {
	name: string;
	photo: string;
	link: string;
}

export let animais = [
	{
		name: "papagaio",
		photo:
			"https://upload.wikimedia.org/wikipedia/commons/9/99/Papagaio-verdadeiro.jpg",
		link: "https://pt.wikipedia.org/wiki/Papagaio-verdadeiro",
	},
	{
		name: "crocodilo",
		photo:
			"https://cdn.pixabay.com/photo/2014/01/14/18/31/nile-crocodile-245013_1280.jpg",
		link: "",
	},
	{
		name: "gato",
		photo:
			"https://www.hypeness.com.br/1/2022/02/e22af62f-edit_gatos_fatos_rawpixel2.jpg",
		link: "",
	},
	{
		name: "girafa",
		photo: "https://live.staticflickr.com/1591/24642066472_8c60e01f4d_b.jpg",
		link: "",
	},
	{
		name: "urso",
		photo:
			"https://cdn.pixabay.com/photo/2014/08/22/14/09/bear-424383_1280.jpg",
		link: "",
	},
	{
		name: "pinguin",
		photo:
			"https://cdn.pixabay.com/photo/2019/12/17/17/31/donkey-penguin-4702115_1280.jpg",
		link: "",
	},
	{
		name: "gnu",
		photo:
			"https://cdn.pixabay.com/photo/2020/03/04/04/14/gnu-4900473_1280.jpg",
		link: "",
	},
];

export let perguntas: Array<string> = ["O seu animal é legal"];

export let respostas: Array<boolean> = [];
