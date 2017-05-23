$(document).ready(function(){
    $.getJSON('http://ergast.com/api/f1/2016/driverstandings.json', function(data) {
        var startingpoint = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        for (var i = 0; i < startingpoint.length; i++){
            $("#maintable").append("<tr><td>" + startingpoint[i].position + "</td><td>" + startingpoint[i].Driver.nationality + "</td><td><a href = " + startingpoint[i].Driver.url + ">" + startingpoint[i].Driver.givenName + " " + startingpoint[i].Driver.familyName + "</a></td><td><a href =" + startingpoint[i].Constructors[0].url + ">" + startingpoint[i].Constructors[0].name + "</a></td><td>" + startingpoint[i].points +"</tr>");
        }
    });
});