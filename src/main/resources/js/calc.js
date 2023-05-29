function insert(num) {
    document.form.textview.value = document.form.textview.value + '+' + num;
    document.form.lords.value = document.form.lords.value + '+' + num/3;
    document.form.wantier.value = document.form.wantier.value + '-' + num;
    equal();
}
function insertMin(num) {
    document.form.textview.value = document.form.textview.value + '-' + num;
    document.form.lords.value = document.form.lords.value + '-' + num/3;
    document.form.wantier.value = document.form.wantier.value + '+' + num;
    equal();
}
function insertUp(num, name) {
    let numer = document.getElementById(name);
    if (numer.value != '0'){
        numer.value = numer.value + '-' + 1;
        numer.value = eval(numer.value);
        insert(num);
    }
}
function backDop(num,form,shrt) {
    if(form=='notS'||form=='S'){
        if(form=='notS'){
            document.form.dops.value = document.form.dops.value + '-' + 3;
            equal()
        }
        if(form=='S'){
            document.form.dops.value = document.form.dops.value + '+' + 1;
            equal()
        }
        document.form.textview.value = document.form.textview.value + '-' + document.getElementById(num).value;
        document.form.lords.value = document.form.lords.value + '-' + document.getElementById(num).value/3;
        document.getElementById(num).value = 0;
        equal()
    }
    if(form=='lord'){
        document.form.textview.value = document.form.textview.value + '-' + document.getElementById(num).value;
        document.form.lords.value = document.form.lords.value + '+' + document.getElementById(num).value;
        document.getElementById(num).value = 0;
        equal()
    }
    if(shrt!='0'){
        document.getElementById(num).value -= document.getElementById(shrt).value;
        document.form.textview.value = document.form.textview.value + '-' + document.getElementById(shrt).value;
        document.form.lords.value = document.form.lords.value + '-' + document.getElementById(shrt).value/3;
        document.getElementById(shrt).value = 0;
        let ops='ops'+shrt;
        var nodes = document.getElementById(ops).childNodes;
        for(var i=0; i<nodes.length; i++) {
            if (nodes[i].nodeName.toLowerCase() == 'div') {
                nodes[i].innerHTML = nodes[i].innerHTML.replace(/🗸/gi, '');
            }
        }
        equal()
    }
    equal()
}

function saplus() {
    document.form.dops.value = document.form.dops.value + '+' + 3;
    equal();
}
function saminus() {
    document.form.dops.value = document.form.dops.value + '-' + 1;
    equal();
}
function sapportplus(num) {
    if(document.form.dops.value != '0'){
        saminus();
        insert(num);
    }
}
function sapportminus(num) {
    if(document.form.dops.value != '0'){
        saplus();
        insertMin(num);
    }
}
function lords(cost) {
    var uslovie = document.form.lords.value;
    console.log(uslovie);
    /*if(uslovie-cost>=0){
        document.form.lords.value=uslovie-cost;
        document.form.textview.value = document.form.textview.value + '+' + cost;
        equal()
    }*/
    document.form.lords.value=uslovie-cost;
    document.form.textview.value = document.form.textview.value + '+' + cost;
    equal()
}

function shetPLus(num,id,who) {
    let numer = document.getElementById(id*2);
    if (numer.value != '0'){
        //numer.value = numer.value + '-' + 1;
        //numer.value = eval(numer.value);
        if(who=='lords'){
            lords(num);
        }else{
            insert(num);
            document.getElementById(id * 3).value = document.getElementById(id * 3).value + '+' + num;
            document.getElementById(id * 3).value = eval(document.getElementById(id * 3).value);
            document.getElementById(id * 4).value = document.getElementById(id * 4).value + '+' + num;
            document.getElementById(id * 4).value = eval(document.getElementById(id * 4).value);
        }
    }
}
function shetMinus(num,id,who) {
    let numer = document.getElementById(id*2);
    if (numer.value != '0' && numer.parentElement.querySelector("input").value != 0){
        //numer.value = numer.value + '-' + 1;
        //numer.value = eval(numer.value);
        if(who=='lords'){
            lords(-num);
        }else{
            insertMin(num);
            document.getElementById(id*3).value = document.getElementById(id*3).value + '-' + num;
            document.getElementById(id*3).value = eval(document.getElementById(id*3).value);
            document.getElementById(id*4).value = document.getElementById(id*4).value + '-' + num;
            document.getElementById(id*4).value = eval(document.getElementById(id*4).value);
        }
    }
}

function clean(nod) {
    document.form.textview.value = "0";
    document.form.lords.value = "0";
    document.form.dops.value = "0";
    document.form.wantier.value = "";
    document.getElementById('lineFormationAdd').innerHTML = "";
    document.getElementById('supportFormationAdd').innerHTML = "";
    document.getElementById('lordsFormationAdd').innerHTML = "";
}
function equal() {
    var exp = document.form.textview.value;
    var lord = document.form.lords.value;
    var dop = document.form.dops.value;
    var expec = document.form.wantier.value;
    if(exp) {
        document.form.textview.value = eval(exp);
        //document.form.lords.value = Math.floor(eval(lord));
        document.form.lords.value = eval(lord).toFixed(2);
        document.form.dops.value = eval(dop);
        document.form.wantier.value = eval(expec);
    }
}