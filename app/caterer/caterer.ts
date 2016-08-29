export class Caterer{
	id: number;
	title: string;
	description: string;
	address: string;
	mobile: string;
	mobile_alt: string;
	landline: string;
	landline_alt: string;
	terms: string;
	images: { image: string, caption: string };
	offer: string;
	menu: { title: string, dishes: { title: string, dish_type: string } }
	packages: { title: string, dishes: { title: string, dish_type: string } }
}