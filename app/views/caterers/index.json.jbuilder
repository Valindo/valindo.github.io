json.caterers @caterers do |caterer|
	json.id caterer.id
	json.title caterer.title
	json.description caterer.description
	json.address caterer.address.location
	if caterer.offer
		json.offer caterer.offer.description
	end
	if caterer.contact
		if caterer.contact.mobile
			json.mobile caterer.contact.mobile
		end
		if caterer.contact.mobile_alt
			json.mobile_alt caterer.contact.mobile_alt
		end
		if caterer.contact.landline
			json.landline caterer.contact.landline
		end
		if caterer.contact.landline_alt
			json.landline_alt caterer.contact.landline_alt
		end

		if caterer.contact.email
			json.email caterer.contact.email
		end
	end
	json.images caterer.images do |image|
		json.image image.picture.url
	end

	json.menu caterer.menus do |menu|
		json.title menu.title
		json.dishes menu.dishes do |dish|
			json.title dish.title
			json.dish_type dish.dish_type
		end
	end

	json.packages caterer.packages do |package|
		json.title package.title
		json.dishes package.dishes do |dish|
			json.title dish.title
			json.dish_type dish.dish_type
		end
	end

end