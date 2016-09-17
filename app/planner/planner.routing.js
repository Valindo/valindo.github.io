"use strict";
var router_1 = require('@angular/router');
var planner_component_1 = require('./planner.component');
var plannerview_component_1 = require('./plannerview.component');
exports.plannersRoutes = [
    { path: 'planners', component: planner_component_1.PlannerComponent },
    { path: 'planner/:id', component: plannerview_component_1.PlannerViewComponent }
];
exports.plannersRouting = router_1.RouterModule.forChild(exports.plannersRoutes);
//# sourceMappingURL=planner.routing.js.map