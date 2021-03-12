$(document).ready(function () {
    
    $("form").submit(function (event) {
     event.preventDefault(); 
     $("#error").text("")
        let ville = $("#city").val(); 
        console.log(ville)
       
       let url = "http://api.openweathermap.org/data/2.5/weather?q=" + ville + "&appid=" + "a57076d22ba1eb7fa94280e4163a4226"+ "&units=metric";
       
        $.ajax({
           
            url: url,
            type: "GET",
            dataType: "json",
    
            success: function (data) {
                console.log(data);
                $(".information").show("slow");
                $(".titre").text("Current Weather for "+ville+","+data.sys.country)
                 
                $("#temperature").text(data.main.temp+ " °") 
                 
                 $("#hum").text(data.main.humidity+"%")

                 $("#mintemp").text(data.main. temp_min+ " ° ") 

                 $("#maxtemp").text(data.main.temp_max+ " ° ") 

                  $("#latitude").text(data.coord.lat)

                  $("#Longitude").text(data.coord.lon)
                 
                  $("#descri").html("<img src=https://openweathermap.org/img/w/"+ data.weather[0].icon+".png></img>"+data.weather[0].description)
                    
                  $("#Speed").text(data.wind.speed)

                  $("#derection").text(data.wind.deg)
                 
                  
                 
                },
                error: function (){
                     

                    $("#error").text("euror ! voules vous taper le ville")
           
        }
    
            });





    })
    
    $("#submitForecast").click(function () {
        let ville = $("#city").val(); 
        let jours = $("#days").val();
        console.log(ville)
        console.log(jours)
        let tbody = $("#forecastWeather").html("")
       let urld = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + ville +"&cnt="+ jours +"&appid=" + "c10bb3bd22f90d636baa008b1529ee25"+ "&units=metric";
      
       $.ajax({
           
        url: urld,
        type: "GET",
        dataType: "json",

        success: function (data) {
            console.log(data)
           console.log(data.list[0].weather[0])
             
        
            
             let tbody = $("#forecastWeather")
              
             for(let i=0 ; i<=jours ; i++){
              
                let tr ="<tr><td><img src=https://openweathermap.org/img/w/"+ data.list[i].weather[0].icon+".png /></td>" + 
                    "<td>" + data.list[i].weather[0].main + "</td>" + "<td>" + data.list[i].weather[0].description +"</td>" 
                    +"<td>" + data.list[i].feels_like.morn +"°C"+ "</td>" + "<td>"+ data.list[i].feels_like.night +"°C"+"</td>"+
                     "<td>"+ data.list[i].temp.min + "°C"+"</td>"+ "<td>"+data.list[i].temp.max +"</td>"+
                     "<td>"+ data.list[i].pressure+"</td>"+"<td>"+ data.list[i].humidity+"</td>"+
                     "<td>"+ data.list[i].speed+"</td>"+"<td>"+ data.list[i].deg+"</td>"+"</tr>"
                 
                 tbody.append(tr);
                 
                 
                
             }
             
             
            },

    })




       
    });

      
    setTimeout(function(){
        $("#txt").typed({

          strings:["the most simplest weather app.It's simple."],
          typeSpeed:40

        })
    }, 0);

    setTimeout(function(){
        $(".tx2").typed({
            
          strings:["Get weather information of any city ."],
          typeSpeed:50

        })

    }, 4000);

    setTimeout(function(){
        $("#l1").typed({
            
          strings:["Temperateur"],
          typeSpeed:30

        })

    }, 8000);

    setTimeout(function(){
        $("#l2").typed({
            
          strings:["pressure"],
          typeSpeed:30

        })

    }, 9500);
    setTimeout(function(){
        $("#l3").typed({
            
          strings:["Wind Speed"],
          typeSpeed:30

        })

    }, 11000);
    setTimeout(function(){
        $("#l4").typed({
            
          strings:[" Humidity "],
          typeSpeed:30

        })

    }, 12500);



});