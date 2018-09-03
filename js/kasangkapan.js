function Kasangkapan() {
    var self = this;

    self.katangian = {
        fontSize: "35",
        fontFace: "Baybayin",
        fontWeight: "normal",
        fontStyle: "normal"
    };

    self.suporta_sa_kuwadro = function() {
        return Modernizr.canvas;
    }

    self.pasimula = function() {
        let sagot = true;
        if (!self.suporta_sa_kuwadro()) {
            sagot = false;
        }
        return sagot;
    }

    self.guhintin_ang_tabing = function(ang_kuwadro, konteksto, mensahe) {
        konteksto.fillStyle = "#000000";
        konteksto.fillRect(0, 0, ang_kuwadro.width, ang_kuwadro.height);
        konteksto.strokeStyle = "#000000";
        konteksto.strokeRect(5,  5, ang_kuwadro.width-10, ang_kuwadro.height-10);
        konteksto.font = self.katangian.fontSize + "px " + self.katangian.fontFace;

        var metrics = konteksto.measureText(mensahe.trim());
        var textWidth = metrics.width;
        var xPosition = (ang_kuwadro.width/2) - (textWidth/2);
        var yPosition = (ang_kuwadro.height/2);

        konteksto.fillStyle = "#9BCC60";
        konteksto.fillText(mensahe.trim(),  xPosition ,yPosition);

        $("#download").attr("href", ang_kuwadro.toDataURL());
    }
}
