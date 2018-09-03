function Baybayin() {
    var self = this;

    self.isalin_ang_salita = function(orihinal_na_salita, trad_o_mode) {
        let lista_salita = orihinal_na_salita.split(" ");
        let pang_wakas = "";
        for (let s in lista_salita) {
            let p_salita = lista_salita[s];
            if (p_salita.length > 0) {
                let c_salita = p_salita.split("");
                for (var c = 0; c < c_salita.length; c++) {
                    let lapit_titik = c_salita[c + 1];

                    if (typeof(lapit_titik) === "undefined") {
                        pang_wakas += trad_o_mode ? self.linisin(alpabeto[c_salita[c]]) : alpabeto[c_salita[c]];
                    } else if (self.patinig(lapit_titik)) {
                        if (self.patinig(c_salita[c]) && self.patinig(lapit_titik)) {
                            pang_wakas += self.linisin(alpabeto[c_salita[c]]);
                        } else {
                            pang_wakas += alpabeto[c_salita[c] + lapit_titik];
                            c++;
                        }
                    } else {
                        let kuha_titik = alpabeto[c_salita[c]];
                        if (!self.patinig(c_salita[c])) {
                            if (trad_o_mode) {
                                kuha_titik = self.linisin(kuha_titik);
                            }
                        }
                        pang_wakas += kuha_titik;
                    }
                }
            }
        }
        return pang_wakas;
    }

    self.patinig = function(titik) {
        let sagot = false;
        if (patinig.indexOf(titik) > -1) {
            sagot = true;
        }
        return sagot;
    }

    self.linisin = function(titik) {
        return titik.replace("+", "");
    }
}
