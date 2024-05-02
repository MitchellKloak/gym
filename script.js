console.log("hello123");
$(document).ready(function() {
    $("#searchBtn").on("click", function() {
        var weight = $("#WeightInput").val().trim();
        var height = $("#HeightInput").val().trim();
        var gender = $("#GenderInput").val().trim().toLowerCase();
        var age = $("#AgeInput").val().trim();

        if (!weight, !height, !gender, !age) {
            alert("Please fill in all fields.");
            return;
        }

        getBMRData(weight, gender, height, age);
        getIBWata(weight,gender,height,age);
        getTDEEData(weight,gender,height,age);
        getBMIData(weight,gender,height,age);
    });
});

function getBMRData(weight, gender, height, age) {
    console.log(weight, gender, height, age)
const settings = {
    async: true,
    crossDomain: true,
    url: 'https://gym-fit.p.rapidapi.com/v1/calculator/bmr?weight=78&height=180&gender=male&age=25',
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '484e1c4bc1msh955f45b8300c55ap157b61jsn001cc190da62',
        'X-RapidAPI-Host': 'gym-fit.p.rapidapi.com'
        }
    };

    $.ajax(settings).done(function(response) {  
      console.log(response);
        $("#BMRresultContainer").html(`<p>Your BMR (Basal metabolic rate) is: ${response.result}</p>`);
    })
}


function getIBWata(weight, gender, height, age) {
    const settings = {
    async: true,
    crossDomain: true,
    url: 'https://gym-fit.p.rapidapi.com/v1/calculator/ibw?height=180',
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '484e1c4bc1msh955f45b8300c55ap157b61jsn001cc190da62',
        'X-RapidAPI-Host': 'gym-fit.p.rapidapi.com'
    }
};

    $.ajax(settings).done(function(response) {  
      console.log(response);
        $("#IBWresultContainer").html(`<p>Your IBW (Ideal Body Weight) is: ${response.result}</p>`);
    })
}


function getTDEEData(weight, gender, height, age) {
    const settings = {
    async: true,
    crossDomain: true,
    url: 'https://gym-fit.p.rapidapi.com/v1/calculator/tdee?activityLevel=active&gender=male&age=25&weight=78&height=180',
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '484e1c4bc1msh955f45b8300c55ap157b61jsn001cc190da62',
        'X-RapidAPI-Host': 'gym-fit.p.rapidapi.com'
    }
};

    $.ajax(settings).done(function(response) {  
      console.log(response);
        $("#TDEEresultContainer").html(`<p>Your TDEE (Total Daily Energy Expenditure) is: ${response.result}</p>`);
    })
}



function getBMIData(weight, gender, height, age) {
    const settings = {
    async: true,
    crossDomain: true,
    url: 'https://gym-fit.p.rapidapi.com/v1/calculator/bmi?weight=78&height=180',
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '484e1c4bc1msh955f45b8300c55ap157b61jsn001cc190da62',
        'X-RapidAPI-Host': 'gym-fit.p.rapidapi.com'
    }
};

    $.ajax(settings).done(function(response) {  
      console.log(response);
        $("#BMIresultContainer").html(`<p>Your BMI (Body mass index) is: ${response.result}</p>`);
    })
}
