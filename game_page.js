
function send() {

    get_value1 = document.getElementById("number_1").value;

    get_value2 = document.getElementById("number_2").value;

    operator = document.getElementById("operator").value;

    document.getElementById("value").innerHTML = parseInt(get_value1) * parseInt(get_value2);

    document.getElementById("value").innerHTML =  get_value1 + operator + get_value2 

    document.getElementById("number_1").value = "";

    document.getElementById("number_2").value = "";

    document.getElementById("operator").value = "";

}