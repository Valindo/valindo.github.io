"use strict";
var router_1 = require('@angular/router');
var venue_component_1 = require('./venue.component');
var venueview_component_1 = require('./venueview.component');
var venuesRoutes = [
    { path: 'venues', component: venue_component_1.VenueComponent },
    { path: 'venue/:id', component: venueview_component_1.VenueviewComponent }
];
exports.venuesRouting = router_1.RouterModule.forChild(venuesRoutes);
//# sourceMappingURL=venue.routing.js.map