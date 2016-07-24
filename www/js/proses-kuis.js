function check(id) {
	id = "#" + id; // sama dengan #id

	// init
	var jawaban_soal = jQuery(id + " #jawaban-soal").text();
	var status_jawaban_benar = jQuery(id + " #status-jawaban-benar");
	var status_jawaban_salah = jQuery(id + " #status-jawaban-salah");
	var bcheck = jQuery(id + " #bcheck");
	var bcon = jQuery(id + " #bcon");
	var pilihan_jawaban = $(id + ' form ul li input[name=answer]:checked').val();

	// proses
	bcheck.hide();
	bcon.show();
	console.log(jawaban_soal);
	console.log(pilihan_jawaban);

	if (jawaban_soal == pilihan_jawaban) {
		status_jawaban_benar.show();	
	} else {
		status_jawaban_salah.show();
	}
	
}