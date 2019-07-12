$('#temperature').keyup(calculateTemperature);
$('input[name="inputTemperature"]').change(calculateTemperature);
$('input[name="outputTemperature"]').change(calculateTemperature);


function calculateTemperature(){
    let inputTemperature = $('input[name="inputTemperature"]:checked').val();
    let outputTemperature = $('input[name="outputTemperature"]:checked').val();
    let userValue = $('#temperature').val();
    let result = 0;
    let resultUnit = '';
    
    userValue = parseInt(userValue);
    if( isNaN(userValue) == true && $('#temperature').val().length > 0 ){
        alert('Podaj liczbe');
        return 1;
    }

    
    if ( inputTemperature == outputTemperature ){
        result = userValue;
    }
    
    else if (inputTemperature == "celcjusz"){
        if( outputTemperature == "fahrenheit" ){
            result = (userValue * 1.8) + 32;
        }
        
        if( outputTemperature == "kelvin" ){
            result = userValue + 273.15;
        }
    }
    
    else if( inputTemperature == "fahrenheit" ){
        
        if( outputTemperature == "celcjusz" ){
            result = (userValue - 32) / 1.8;
        }
       
        if( outputTemperature == "kelvin" ){
            result = (userValue + 459.67) * 5/9;
        }
    }
    
    else if( inputTemperature == "kelvin" ){
       
        if( outputTemperature == "celcjusz" ){
            result = userValue - 273.15;
        }
        
        if( outputTemperature == "fahrenheit" ){
            result = (userValue * 1.8) - 459.67;
        }
    }
    
    if ( outputTemperature == "celcjusz" ){
        resultUnit = " °C";
    }    
    
    else if ( outputTemperature == "fahrenheit" ){
        resultUnit = " °F";
    }
    
    else if ( outputTemperature == "kelvin" ){
        resultUnit = " K";
    }
    
    console.log(resultUnit);
    
    $('#result').text(result + resultUnit);
    
}








