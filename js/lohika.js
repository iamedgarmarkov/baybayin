function suriinAngTitik(ORIHINAL_NA_SALITA) {
	var NASURI_NA_TITIK = "";
	var NASALIN_NA_TITIK = "";
	var TAGATUKOY = "";

	for (var i = 0; i <= ORIHINAL_NA_SALITA.length; i++) {
		for (var x = 3; x > 0; x--) {
			NASURI_NA_TITIK = ORIHINAL_NA_SALITA.substring(i, i + x);

			if (NASURI_NA_TITIK in alpabeto || NASURI_NA_TITIK == " ") {
				NASALIN_NA_TITIK += (NASURI_NA_TITIK == " ") ? " " : alpabeto[NASURI_NA_TITIK];
				
				TAGATUKOY += NASURI_NA_TITIK;
				i = ORIHINAL_NA_SALITA.indexOf(TAGATUKOY) + TAGATUKOY.length - 1;
				break;
			}
		};
	}

	return NASALIN_NA_TITIK;
}