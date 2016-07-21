$(document).ready(function() {
	raschet_kotla();
});

function raschet_kotla() {
	var kot_koef_pel = 3.825;
	var kot_koef_brik = 3.6;
	var kot_koef_dr = 3.2;
	var kot_koef_gaz = 7.2;
	var kot_koef_ugol = 5.25;
	var kot_koef_maslo = 7.2;
	var kot_koef_el = 1;
	var kot_koef_dis = 7.2;
	var p = $('#plosh').val().replace(/,/, '.');
	var h = $('#vis').val().replace(/,/, '.');
	var pot = $('#house').val().replace(/,/, '.');
	var t = $('#tempe').val().replace(/,/, '.');
	var day = $('#days').val().replace(/,/, '.');
	var ot_char = 0.5024;
	pow = ((((((p / 10) * h) / 3) * pot) / 100) * t) / 23;
	powmin = (pow * 1.3).toFixed(2);
	$('#pow').val(powmin);
	var rPow = 15;
	if (powmin > 0 && powmin <= 14) {
		rPow = 14;
	} else if (powmin > 14 && powmin <= 18) {
		rPow = 18;
	} else if (powmin > 18 && powmin <= 24) {
		rPow = 24;
	} else if (powmin > 24 && powmin <= 30) {
		rPow = 30;
	} else if (powmin > 30 && powmin <= 36) {
		rPow = 36;
	} else if (powmin > 36 && powmin <= 48) {
		rPow = 48;
	} else if (powmin > 48 && powmin <= 55) {
		rPow = 55;
	} else if (powmin > 55 && powmin <= 70) {
		rPow = 70;
	} else if (powmin > 70 && powmin <= 75) {
		rPow = 75;
	} else if (powmin > 75 && powmin <= 90) {
		rPow = 90;
	} else if (powmin > 90 && powmin <= 120) {
		rPow = 120;
	} else if (powmin > 120 && powmin <= 170) {
		rPow = 170;
	} else if (powmin > 170 && powmin <= 240) {
		rPow = 240;
	} else if (powmin > 240 && powmin <= 290) {
		rPow = 290;
	} else if (powmin > 290 && powmin <= 360) {
		rPow = 360;
	} else if (powmin > 360 && powmin <= 500) {
		rPow = 500;
	} else {
		rPow = 500;
	}
	$('#rPow').val(rPow);
	z_b = ((((pow * ot_char) * day * 24) / kot_koef_brik) / 1000).toFixed(2);
	c_b = (z_b * $('#brick_price').val().replace(/,/, '.')).toFixed(2);
	$('#brick_ob').val(z_b);
	$('#brick_itogo').val(c_b);
	z_d = (((((pow * ot_char) * day * 24) / kot_koef_dr) / 1000) * 2.5).toFixed(2);
	c_d = (z_d * $('#dr_price').val().replace(/,/, '.')).toFixed(2);
	$('#dr_ob').val(z_d);
	$('#dr_itogo').val(c_d);
	z_e_n = (((pow * ot_char) * day * 24) / kot_koef_el).toFixed(2);
	c_e_n = (z_e_n * $('#el_n_price').val().replace(/,/, '.')).toFixed(2);
	$('#el_n_ob').val(z_e_n);
	$('#el_n_itogo').val(c_e_n);
	z_e_u = (((pow * ot_char) * day * 24) / kot_koef_el).toFixed(2);
	c_e_u = (z_e_u * $('#el_u_price').val().replace(/,/, '.')).toFixed(2);
	$('#el_u_ob').val(z_e_u);
	$('#el_u_itogo').val(c_e_u);
	z_g_n = (((pow * ot_char) * day * 24) / kot_koef_gaz).toFixed(2);
	c_g_n = (z_g_n * $('#gaz_n_price').val().replace(/,/, '.')).toFixed(2);
	$('#gaz_n_ob').val(z_g_n);
	$('#gaz_n_itogo').val(c_g_n);
	z_g_u = (((pow * ot_char) * day * 24) / kot_koef_gaz).toFixed(2);
	c_g_u = (z_g_u * $('#gaz_u_price').val().replace(/,/, '.')).toFixed(2);
	$('#gaz_u_ob').val(z_g_u);
	$('#gaz_u_itogo').val(c_g_u);
}