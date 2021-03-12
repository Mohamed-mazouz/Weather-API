$(document).ready(function () {
let ville ="nador";
let url = "http://api.openweathermap.org/data/2.5/weather?q=" + ville + "&appid=" + "a57076d22ba1eb7fa94280e4163a4226";


    // $.ajax({

    //     url: "https://jsonplaceholder.typicode.com/users",
    //     type: "GET",
    //     dataType: "json",

    //     success: function (data) {
    //         console.log(data);
    //         let row = $(".row");
            
    //         for (let i = 0; i < data.length; i++) {

    //             let col = "<div class='col-md-3 block'> <h3>" + data[i].name + "</h3><h4>" + data[i].username + "</h4><h5>" + data[i].email + "</5> <h6>" + data[i].address.street + "</h6>"
    //             row.append(col);


    //         }

    //     }

    $.ajax({

        url: url,
        type: "GET",
        dataType: "json",

        success: function (data) {
            console.log(data);
            
            }

        



        });
});