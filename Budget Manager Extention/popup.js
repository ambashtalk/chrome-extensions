///<reference path="chrome-api-vsdoc.js"/>
$(function(){

    chrome.storage.sync.get(['total','limit'], function(budget){
        $('#total').text(budget.total);
        $('#limit').text(budget.limit);
    })

    $('#spend').click(function(){
        chrome.storage.sync.get(['total','limit'], function(budget){
            var newTotal = 0;
            if (budget.total){
                newTotal += parseInt(budget.total);
            }

            var amount = $('#amount').val();
            if (amount){
                newTotal += parseInt(amount);
            }

            chrome.storage.sync.set({'total': newTotal}, function(){
                if (amount && newTotal >= budget.limit){
                    var notify = {
                        type : 'basic',
                        iconUrl : 'icon48.png',
                        title : 'Limit Reached',
                        message : "Take a break. You're out of money!!"
                    };
                    // alert("Hello");
                    chrome.notifications.create("limitNotify", notify, function(){console.log("Logging notification")});
                    // alert("Bye");
                }
            });

            $('#total').text(newTotal);
            $('#amount').val('');            
        });
    });
});

