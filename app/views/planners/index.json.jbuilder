json.planners @planners do |planner|
	json.id planner.id
	json.title planner.title
	json.description planner.description
	if planner.contact
		if planner.contact.mobile
			json.mobile planner.contact.mobile
		end

		if planner.contact.mobile_alt
			json.mobile_alt planner.contact.mobile_alt
		end

		if planner.contact.landline
			json.landline planner.contact.landline
		end

		if planner.contact.landline_alt
			json.landline_alt planner.contact.landline_alt
		end

		if planner.contact.email
			json.email planner.contact.email
		end
	end
	json.address planner.address.location
	json.terms planner.terms
	if planner.offer	
		json.offer planner.offer.description
	end
	json.images planner.images do |image|
		json.image image.picture.url
	end
end