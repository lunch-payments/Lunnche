var zmien = 0;
function dis() {
    $( "div.und" ).removeClass( "no" );
    $('div.ma').addClass('no');
}

function setting() {
    $( "div.grey" ).removeClass( "no" );
    $( "div.setting" ).removeClass( "no" );
}

function show() {

    $("td.pass2" ).removeClass( "no" );
    $('td.pass').addClass('no');
}

function colse() {
    $( "div.grey" ).addClass( "no" );
    $( "div.setting" ).addClass( "no" );
    $("td.pass2" ).addClass( "no" );
    $('td.pass').removeClass('no');
    $( "td.passs" ).addClass( "no" );
    $('td.passs2').addClass('no');
    $('#pass').removeClass('no');
    $( "td.avatarz" ).addClass( "no" );
    $( "td.avatartd" ).removeClass( "no" );
    $( "td.avatarch" ).addClass( "no" );
    $( "div.avatarform" ).addClass( "no" );
    $( "td.sur" ).addClass( "no" );
    $( "td.surb" ).addClass( "no" );
    $('td.btnsur').removeClass("no");
    $('td.surt').removeClass("no");
    $( "td.names" ).addClass( "no" );
    $( "td.namesb" ).addClass( "no" );
    $('td.btnnames').removeClass("no");
    $('td.namest').removeClass("no");
    $('tr.conf').addClass("no");
    zmien = 0;
}

function passbtn() {
    $( "#pass" ).addClass( "no" );
    $('td.pass').addClass('no');
    $( "td.passs" ).removeClass( "no" );
    $('td.passs2').removeClass('no');
    $('td.pass2').addClass("no");
    zmien++;
    confim();
}

function avbtn() {
    $( "td.avatarz" ).removeClass( "no" );
    $( "td.avatartd" ).addClass( "no" );
    $( "td.avatarch" ).removeClass( "no" );
    $( "div.avatarform" ).removeClass( "no" );
    zmien++;
    confim();
}

function names() {
    $( "td.names" ).removeClass( "no" );
    $( "td.namesb" ).removeClass( "no" );
    $('td.btnnames').addClass("no");
    $('td.namest').addClass("no");
    zmien++;
    confim();
}

function sur() {
    $( "td.sur" ).removeClass( "no" );
    $( "td.surb" ).removeClass( "no" );
    $('td.btnsur').addClass("no");
    $('td.surt').addClass("no");
    zmien++;
    confim();
}


function confim() {
    if(zmien > 1){
        $('tr.conf').removeClass("no");
    };
}