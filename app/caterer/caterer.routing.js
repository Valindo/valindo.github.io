"use strict";
var router_1 = require('@angular/router');
var caterer_component_1 = require('./caterer.component');
var catererview_component_1 = require('./catererview.component');
exports.catererRoutes = [
    { path: 'caterers', component: caterer_component_1.CatererComponent },
    { path: 'caterer/:id', component: catererview_component_1.CatererViewComponent }
];
exports.caterersRouting = router_1.RouterModule.forChild(exports.catererRoutes);
//# sourceMappingURL=caterer.routing.js.map