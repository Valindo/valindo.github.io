export class Venue {
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
	amenities: { title: string, description: string };
}