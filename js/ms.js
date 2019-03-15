function populateData() {
	getAirFreshStatus();
	getTPStatus();
    getMainBDStatus();
    // reserveStall();
}

function getAirFreshStatus() {
    var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("freshnerStatus").innerHTML = this.responseText;
        }
	};
	xmlhttp.open("GET", "getAirFresh.php", true);
	xmlhttp.send();
}

function spraySprayBaby() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("freshnerStatus").innerHTML = this.responseText;
        }
	};
	xmlhttp.open("GET", "sprayAirFresh.php", true);
	xmlhttp.send();
}

function getTPStatus() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        	var responseTextString = this.responseText;
        	var tplvlok = responseTextString.substring(0,responseTextString.indexOf(","));
            var tprqst = responseTextString.substring(responseTextString.indexOf(",")+1);
            // document.getElementById("tpStatus").innerHTML = "TP Status Response Output Here" + this.responseText;
            document.getElementById("tplvlok").innerHTML = "<strong>Toilet Paper Levels </strong>" + tplvlok;
            document.getElementById("tprqst").innerHTML = "<strong>Toilet Paper Request </strong>" + tprqst;
        }
	};
	xmlhttp.open("GET", "getTPStatus.php", true);
	xmlhttp.send();
}

function clrTPReq() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var responseTextString = this.responseText;
        	var tplvlok = responseTextString.substring(0,responseTextString.indexOf(","));
            var tprqst = responseTextString.substring(responseTextString.indexOf(",")+1);
            // document.getElementById("tpStatus").innerHTML = "TP Status Response Output Here" + this.responseText;
            document.getElementById("tplvlok").innerHTML = "<strong>Toilet Paper Levels </strong>" + tplvlok;
            document.getElementById("tprqst").innerHTML = "<strong>Toilet Paper Request </strong>" + tprqst;
        }
	};
	xmlhttp.open("GET", "./tp/clrrqst.php", true);
	xmlhttp.send();
}

function getMainBDStatus() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //document.getElementById("mainBDStatus").innerHTML = "Bathroom Door Response Output: " + this.responseText;
            var responseTextString = this.responseText;
            var mainBDReservedStatus = responseTextString.substring(0,responseTextString.indexOf(",bd_uname"));
            var mainBDReservedUsername = responseTextString.substring(responseTextString.indexOf(",bd_uname")+1,responseTextString.indexOf(",bd_drlck"));
            var mainBDReservedLocked = responseTextString.substring(responseTextString.indexOf(",bd_drlck")+1,responseTextString.indexOf(",bd_clnrqst"));
            var mainBDReservedDirty = responseTextString.substring(responseTextString.indexOf(",bd_clnrqst")+1,responseTextString.indexOf(",bd_mtnrqst"));
            var mainBDReservedMaintenance = responseTextString.substring(responseTextString.indexOf(",bd_mtnrqst")+1);
            document.getElementById("mainBDReservedStatus").innerHTML = "<strong>MainBD Reserved Status </strong>" + mainBDReservedStatus;
            document.getElementById("mainBDReservedUsername").innerHTML = "<strong>MainBD Reserved For: </strong>" + mainBDReservedUsername;
            document.getElementById("mainBDReservedLocked").innerHTML = "<strong>MainBD Door Locked Status </strong>" + mainBDReservedLocked;
            document.getElementById("mainBDReservedDirty").innerHTML = "<strong>MainBD Needs Cleaning Status </strong>" + mainBDReservedDirty;
            document.getElementById("mainBDReservedMaintenance").innerHTML = "<strong>MainBD Maintenance Status </strong>" + mainBDReservedMaintenance;
        }
	};
	xmlhttp.open("GET", "getMainBDStatus.php", true);
	xmlhttp.send();
}

function reserveStall() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //document.getElementById("mainBDStatus").innerHTML = "Bathroom Door Response Output: " + this.responseText;
            var responseTextString = this.responseText;
            var mainBDReservedStatus = responseTextString.substring(0,responseTextString.indexOf(",bd_uname"));
            var mainBDReservedUsername = responseTextString.substring(responseTextString.indexOf(",bd_uname")+1,responseTextString.indexOf(",bd_drlck"));
            var mainBDReservedLocked = responseTextString.substring(responseTextString.indexOf(",bd_drlck")+1,responseTextString.indexOf(",bd_clnrqst"));
            var mainBDReservedDirty = responseTextString.substring(responseTextString.indexOf(",bd_clnrqst")+1,responseTextString.indexOf(",bd_mtnrqst"));
            var mainBDReservedMaintenance = responseTextString.substring(responseTextString.indexOf(",bd_mtnrqst")+1);
            document.getElementById("mainBDReservedStatus").innerHTML = "<strong>MainBD Reserved Status </strong>" + mainBDReservedStatus;
            document.getElementById("mainBDReservedUsername").innerHTML = "<strong>MainBD Reserved For: </strong>" + mainBDReservedUsername;
            document.getElementById("mainBDReservedLocked").innerHTML = "<strong>MainBD Door Locked Status </strong>" + mainBDReservedLocked;
            document.getElementById("mainBDReservedDirty").innerHTML = "<strong>MainBD Needs Cleaning Status </strong>" + mainBDReservedDirty;
            document.getElementById("mainBDReservedMaintenance").innerHTML = "<strong>MainBD Maintenance Status </strong>" + mainBDReservedMaintenance;
        }
    };
    var username = document.getElementById("bd_uname").value;
    var url = "reserveStall.php?bd_uname=" + username;
    xmlhttp.open("GET", url , true);
    xmlhttp.send();
}