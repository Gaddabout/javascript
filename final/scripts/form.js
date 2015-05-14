
/*
function validation () {
	
	var fname = $("fname").value;
	var lname = $("lname").value;
	var eml = $("eml").value;
	var dob = $("dob").value;
	var zip = $("zip").value;
	var pnum = $("pnum").value;
	$("results").value = "";
	
	var emlreg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z] {2,6}$/;
	var dobreg = /^[01]?\d\/[0-3]\d\/\d{4}$/;
	var pnumreg = /^\d{3}-\d{4}$/;

	if(fname!="" && lname!="" && eml!="" && dob!="" && zip!="" && pnum!="") {
		if(eml.match(emlreg)) {
		}
			else {
				alert("Enter a valid email address");
				}
			}
		if(dob.match(dobreg)) {
			else {
				alert("Please use a valid date format");
				}
		
		if(pnum.match(pnumreg)) {
			else {
				alert("Please use recommended number format");
				}
		else {
			alert("All fields are requires");
			return false;
			}
	$("results").value = fname + lname + eml + dob + zip + pnum;
}

window.onload = function () {
     $("submit").onclick = validation;
}









function highLabel(e, value) {
    e = document.getElementById('l' + e.name);
    if (e)
        e.style.background = value;
}

function initForm(f) {
    var e, i;
    for (i = 0; i < f.elements.length; i++) {
        e = f.elements[i];
        /* ignore fields with multiple elements */
        if (e.type == 'text' && !e.length) {
            e.onfocus = function() {
                highLabel(this, '#ccf');
            };
            e.onblur = function() {
                highLabel(this, '');
            };
        }
    }
}
onload = function() {
    initForm(document.a);
}
errc[31] = 'Please enter your two-letter state abbreviation.';
billing_address_check = {
    name: {
        verify: text,
        filter: true,
        message: 'Please enter your first name.'
    },
    surname: {
        filter: 1,
        verify: text,
        message: 'Please enter your last name.',
        filter: 1
    },
    address: {
        filter: 1,
        verify: words,
        message: 'Please enter your address.'
    },
    city: {
        filter: 1,
        verify: text,
        message: 'Please enter your city.'
    },
    state: {
        filter: 1,
        verify: function(s) {
            var a = nwts(s).toUpperCase().match(/^[a-z]{2}$/ig);
            err = a != null && a.length ? 0 : 31;
            return a;
        }
    },
    zip: {
        verify: zip,
        filter: 1,
        force: 1
    },
    phone: {
        verify: tel,
        filter: 1,
        force: 1
    },
    email: {
        verify: email,
        filter: 1,
        force: 1
    }
};