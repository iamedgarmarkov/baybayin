function suriinAngTitik(ORIHINAL_NA_SALITA, MOD_O_TRA) {
	var NASURI_NA_TITIK = "";
	var NASALIN_NA_TITIK = "";
	var TAGATUKOY = "";

	for (var i = 0; i <= ORIHINAL_NA_SALITA.length; i++) {
		for (var x = 3; x > 0; x--) {
			NASURI_NA_TITIK = ORIHINAL_NA_SALITA.substring(i, i + x);

			if (NASURI_NA_TITIK == " " || (NASURI_NA_TITIK in alpabeto)) {

				switch(parseInt(MOD_O_TRA)) {
					case 1:
						if (alpabeto[NASURI_NA_TITIK] == undefined || alpabeto[NASURI_NA_TITIK].indexOf("+") == -1) {
							NASALIN_NA_TITIK += (NASURI_NA_TITIK == " ") ? " " : alpabeto[NASURI_NA_TITIK];
						} else {
							NASALIN_NA_TITIK += "";
						}
						break;
					case 2:
						NASALIN_NA_TITIK += (NASURI_NA_TITIK == " ") ? " " : alpabeto[NASURI_NA_TITIK];
						break;
				}

				TAGATUKOY += NASURI_NA_TITIK;
				i = ORIHINAL_NA_SALITA.indexOf(TAGATUKOY) + TAGATUKOY.length - 1;
				break;
			} else if (!(NASURI_NA_TITIK in alpabeto) && x == 1) {
				TAGATUKOY += NASURI_NA_TITIK;
				i = (i == ORIHINAL_NA_SALITA.length) ? ORIHINAL_NA_SALITA.length + 1 : ORIHINAL_NA_SALITA.indexOf(TAGATUKOY) + TAGATUKOY.length - 1;
				break;
			}
		};
	}

	return NASALIN_NA_TITIK;
}