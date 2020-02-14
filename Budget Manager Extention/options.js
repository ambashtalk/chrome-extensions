$(function(){

    chrome.storage.sync.get('limit', function(budget){
        $('#limit').val(budget.limit);
    })

    $('#setLimit').click(function(){
        var lim = parseInt($('#limit').val());
        if (limit){
            chrome.storage.sync.set({'limit':lim}, function(){
                close();
            });
        }
    })

    $('#resetTotal').click(function(){
        chrome.storage.sync.set({'total': 0});
    })
});