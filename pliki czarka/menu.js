var zmien = 0;

function setting() {
    $( "div.grey" ).removeClass( "no" );
    $( "div.setting" ).removeClass( "no" );
}

function show() {

    $("td.pass2" ).removeClass( "no" );
    $('td.pass').addClass('no');
}

function colse() {
    add = ["div.grey", "div.setting", "td.pass2", "td.passs", 'td.passs2', "td.avatarz",  "td.avatarch", "div.avatarform", "td.sur", "td.surb", "td.names", "td.namesb", 'tr.conf'];
    rem = ["div.avatarform", 'td.pass', '#pass', "td.avatartd", 'td.btnsur', 'td.surt', 'td.btnnames', 'td.namest'];
    for(b in rem){
        $(rem[b]).removeClass( "no" );
    }

    for( a in add){
        $(add[a]).addClass( "no" );
    }


    zmien = 0;
}

function passbtn() {
    add = ["#pass", 'td.pass', 'td.pass2'];
    rem = ["td.passs",'td.passs2' ];
    for( a in add){
        $(add[a]).addClass( "no" );
    }

    for(b in rem){
        $(rem[b]).removeClass( "no" );
    }
    zmien++;
    confim();
}

function avbtn() {
    rem = ["td.avatarz",  "td.avatarch", "div.avatarform"];
    for(b in rem){
        $(rem[b]).removeClass( "no" );
    }
    $( "td.avatartd" ).addClass( "no" );

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
        $( "div.avatarform" ).addClass('co');
    };
}