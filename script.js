function compute()
{
    // Get values of input fields
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // Check if principal is > 0
    if(principal <= 0) {
        // Show Alert if value zero or negative.
        window.alert("Enter a positive number");

        //Set Focus to Principal input field
        document.getElementById("principal").focus();
        return;
    }


    // Calculate the interest value
    var interest = principal * years * rate /100;

    // Calculate the end year
    var year = new Date().getFullYear()+parseInt(years);
 
    // Generating the result text
    var htmloutput;
    htmploutput  = "If you deposit <mark>" +  principal + "</mark><br>";
    htmploutput += "at an interest rate of <mark>" + Number.parseFloat(rate).toFixed(1) + "%</mark><br>";
    htmploutput += "You will receive an amount of <mark>" + interest + "</mark><br>";
    htmploutput += "in the year <mark>" + year + "</mark>";

    // Set the result text
    document.getElementById('result').innerHTML = htmploutput; 

}

function updateRateValue(val) {
    // Set the text value of the slider value
    var x = val;
    document.getElementById('ratevalue').innerText =  (Number.parseFloat(x).toFixed(1) +"%"); 
}