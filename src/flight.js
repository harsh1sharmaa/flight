let data=[
    {
    id:101,
    from:"bly",
    to:"rbl",
    arrival:"9:00AM",
    departure:"2:00PM"
},
    {
    id:102,
    from:"delhi",
    to:"bhopal",
    arrival:"6:00AM",
    departure:"10:00AM"
},
    {
    id:103,
    from:"gujrat",
    to:"suraj",
    arrival:"11:00AM",
    departure:"2:00PM"
},
    {
    id:104,
    from:"lku",
    to:"charbag",
    arrival:"8:00AM",
    departure:"11:00AM"
},
    {
    id:105,
    from:"rajes",
    to:"punjab",
    arrival:"1:00PM",
    departure:"2:00PM"
},
]

$(document).ready(function(){

    let objarr=[];


    for(let i=0;i<data.length;i++){
        let obj=data[i];
        let id=obj.id;
        let from=obj.from;
        let to=obj.to;
        let arrival=obj.arrival;
        let departure=obj.departure;


        $.ajax({
            method: "GET",
            url: "center.php",
            data: { 
                id:id,
                from:from,
                to:to,
                arrival:arrival,
                departure:departure
                
            },
            //  dataType: "JSON"
        }).done(function (data) {
            let newdata = JSON.parse(data);

            //    console.log(newdata);
            objarr.push(newdata);
            

        });

    }

    console.log(objarr);
    disply(objarr);


})

function disply(data){

    

        let html = "<table><tr><th>ID </th><th> Name</th><th>Brand</th><th>Operating System</th><th>Remove</th></tr>";
        for (let i = 0; i < data1.length; i++) {
            console.log(i);
            html += "<tr><td>"
                + data[i].id +
                "</td><td>"
                + data[i].from +
                "</td><td>"
                + data[i].brand +
                "</td><td>"
                + data[i].os +
                "</td><td>" +
                "<a href=" + " #" + " id=\"edit\" data-pid=" + data[i].id + ">X</a>"
            "</td></tr>"
        }




    
}