
$.getScript('//platform.twitter.com/widgets.js', function() {
    twttr.events.bind('click', function(event) {
        console.log("User clicked tweet");
        _gaq.push(['_trackSocial', 'twitter', 'tweet_intent', "http://gratis.naturalis.nl"]);
    });
    
    twttr.events.bind('tweet', function(event) {
        console.log("User Tweeted");
        _gaq.push(['_trackSocial', 'twitter', 'tweet', "http://gratis.naturalis.nl"]);
        thankyou("tweet");
    });
    
    twttr.events.bind('follow', function(event) {
        var followed_user_id = event.data.user_id;
        var followed_screen_name = event.data.screen_name;
        console.log("User followed");
        _gaq.push(['_trackSocial', 'twitter', 'follow', 'https://twitter.com/'+followed_screen_name]);
        thankyou("follow");
    });
});

function thankyou(type)
{
    $("h1").text(thankyou_title);
    $(".tweetButton").hide();
    
    if (type === "tweet")
    {   
        $("#message").html(thankyou_tweet);
    }
    else if (type === "follow")
    {
        $("#message").html(thankyou_follow);
    }
}