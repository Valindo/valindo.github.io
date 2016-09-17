json.venues @venues do |venue|
	json.id venue.id
	json.title venue.title
	json.description venue.description
	json.address venue.address.location 
	if venue.contact
		if venue.contact.mobile
			json.mobile venue.contact.mobile
		end
		if venue.contact.mobile_alt
			json.mobile_alt venue.contact.mobile_alt
		end
		if venue.contact.landline
			json.landline venue.contact.landline
		end

		if venue.contact.landline_alt
			json.landline_alt venue.contact.landline_alt
		end
		if venue.contact.email
			json.email venue.contact.email
		end
	end
	
	json.terms venue.terms
	json.images venue.images do |image|
		json.image image.picture.url
		json.caption image.caption
	end
	if venue.offer
		json.offer venue.offer.description
	end
	json.amenities venue.amenities do |amenity|
		json.title amenity.title
		json.description amenity.description
	end
end