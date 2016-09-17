// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require angular/angular
//= require angular-route/angular-route
//= require tether
//= require bootstrap/dist/js/bootstrap
//= require jquery-mousewheel/jquery.mousewheel
//= require jscrollpane/script/jquery.jscrollpane
//= require spin.js/spin
//= require ladda/dist/ladda.min
//= require select2/dist/js/select2.full
//= require html5-form-validation/dist/jquery.validation
//= require jquery-typeahead/dist/jquery.typeahead.min
//= require jquery-mask-plugin/dist/jquery.mask.min
//= require autosize/dist/autosize.min
//= require bootstrap-show-password/bootstrap-show-password.min
//= require moment/min/moment.min
//= require eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min
//= require fullcalendar/dist/fullcalendar.min
//= require bootstrap-sweetalert/dist/sweetalert.min
//= require remarkable-bootstrap-notify/dist/bootstrap-notify.min
//= require summernote/dist/summernote.min
//= require owl.carousel/dist/owl.carousel.min
//= require ionrangeslider/js/ion.rangeSlider.min
//= require nestable/jquery.nestable
//= require datatables/media/js/jquery.dataTables.min
//= require datatables/media/js/dataTables.bootstrap4.min
//= require datatables-fixedcolumns/js/dataTables.fixedColumns
//= require datatables-responsive/js/dataTables.responsive
//= require d3/d3.min
//= require c3/c3.min
//= require chartist/dist/chartist.min
//= require peity/jquery.peity.min
//= require chartist-plugin-tooltip/dist/chartist-plugin-tooltip.min
//= require gsap/src/minified/TweenMax.min
//= require jquery-countTo/jquery.countTo
//= require cocoon
//= require_tree .


function add_fields(link, association, content) {  
	var new_id = new Date().getTime();  
	var regexp = new RegExp("new_" + association, "g");  
	$(link).parent().before(content.replace(regexp, new_id));  
}

function remove_fields() {
	$(this).prev("input[type=hidden]").val("1");
	$(this).closest(".fields").hide();
}