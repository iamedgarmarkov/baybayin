function suriinAngTitik(ORIHINAL_NA_SALITA) {
	var NASURI_NA_TITIK = "";
	var NASALIN_NA_TITIK = "";
	var TAGATUKOY = "";

	for (var i = 0; i <= ORIHINAL_NA_SALITA.length; i++) {
		for (var x = 3; x > 0; x--) {
			NASURI_NA_TITIK = ORIHINAL_NA_SALITA.substring(i, i + x);

			//Ginagawang space ang di makitang titik kapag ang "x" ay 1.
			if (!(NASURI_NA_TITIK in alpabeto) && x == 1) {
				NASURI_NA_TITIK = " ";
			}

			if (NASURI_NA_TITIK == " " || (NASURI_NA_TITIK in alpabeto)) {
				NASALIN_NA_TITIK += (NASURI_NA_TITIK == " ") ? " " : alpabeto[NASURI_NA_TITIK];
				
				TAGATUKOY += NASURI_NA_TITIK;
				i = ORIHINAL_NA_SALITA.indexOf(TAGATUKOY) + TAGATUKOY.length - 1;
				break;
			}
		};
	}

	return NASALIN_NA_TITIK;
}