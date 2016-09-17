json.id @venue.id
json.title @venue.title
json.description @venue.description
json.address @venue.address.location 
if @venue.contact
	if @venue.contact.mobile
		json.mobile @venue.contact.mobile
	end
	if @venue.contact.mobile_alt
		json.mobile_alt @venue.contact.mobile_alt
	end
	if @venue.contact.landline
		json.landline @venue.contact.landline
	end

	if @venue.contact.landline_alt
		json.landline_alt @venue.contact.landline_alt
	end
	if @venue.contact.email
		json.email @venue.contact.email
	end
end

json.terms @venue.terms
json.images @venue.images do |image|
	json.image image.picture.url(:original)
	json.caption image.caption
end
if @venue.offer
	json.offer @venue.offer.description
end
json.amenities @venue.amenities do |amenity|
	json.title amenity.title
	json.description amenity.description
end

json.reviews @venue.reviews do |review|
	json.name review.name
	json.display_picture review.display_picture
	json.comment review.comment
	json.rating review.rating
end
