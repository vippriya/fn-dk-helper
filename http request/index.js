const $ = require('jquery');

$('#btn').click(function() {
    $('#image').hide();

    $.ajax({
        url: 'https://randomuser.me/api/?results=1',
        dataType: 'json',
        success: function(data) {
            console.log(data);

            var result = `<img src ="${data.results[0].picture.large}">
            <br>
            <br>
           <h3>${data.results[0].name.last}</h3> 
            
            
            `;
            $('#results').html(result);
        }
    });
});
