var Offer = {}

Offer.updater = null;

Offer.updateCounter = function ()
{
    if ($('#counter').length > 0)
    {
            var offerid = $('#counter').attr("data-offerid")
        var url = "/count.json?offerid="+offerid
        $.getJSON(url, function(data)
                {
                    if (data['success'])
                    {
                        $('#counter .amount').text(data['count']);
                    }
                    else
                    {
                        alert("Error: " + data['error']);
                    }
                });
    }
};

Offer.submitEmail = function()
{
    var offerid = $('#emailForm').attr("data-offerid");
    var email = $('input#email').val();
    var url = "/give.json?offerid="+offerid+"&email="+email;
    $.getJSON(url, function(data)
            {
                if (data['success'])
                {
                    $('input#email').val("");
                    $('#counter .amount').text(data['count']);
                    $(".info").remove();
                    $(".error").remove();
                    var message = $('<div class="info">Jou kaart wordt verstured naar '+email+'</div>').click(function() {$(".info").remove(); $(".error").remove();})
                    
                    window.location = "/tweet";
                }
                else
                {
                    $(".info").remove();
                    $(".error").remove();
                    var message = $('<div class="error"><b>Fout:</b> '+data['error']+'</div>').click(function() {$(".info").remove(); $(".error").remove();})
                    $('body').append(message);
                }
            });
    
    return false;
};

$(function ()
{
    $("#emailForm").submit(Offer.submitEmail);
    //$("#emailForm .submit").click(Offer.submitEmail);
    //Offer.updater = setInterval(Offer.updateCounter, 4000);
});