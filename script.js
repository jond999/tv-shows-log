$(document).ready(function() {
    var string  = "";
    
    string += "<button><a href='#ak'>Animal Kingdom</a></button>";            
    string += "<button><a href='#bcs'>Better Call Saul</a></button>";
    string += "<button><a href='#bm'>Black Mirror</a></button>";
    string += "<button><a href='#f'>Fargo</a></button>";
    string += "<button><a href='#hoc'>House of Cards</a></button>";
    string += "<button><a href='#mm'>Mad Men</a></button>";
    string += "<button><a href='#s8'>Sense8</a></button>";
    string += "<button><a href='#sv'>Silicon Valley</a></button>";
    string += "<button><a href='#t'>Taboo</a></button>";
    string += "<button><a href='#ta'>The Americans</a></button>";
    string += "<button><a href='#tl'>The Leftovers</a></button>";
    string += "<button><a href='#td'>Training Day</a></button>";
        
    $(".nav").html(string);
/*
    $("ul li button").click(function() {
        $(this).parent().toggleClass("watched");
        
        if($(this).parent().attr("class") === "")
        {
            $(this).text("Watched");    
        }
        else
        {
            $(this).text("Not watched");    
        }
    });
*/
});
