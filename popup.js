chrome.tabs.query({active:true,currentWindow:true},function(tab){
    var url = tab[0].url;
    document.getElementById("iframe").src = "http://PassReqs.umer936.com/get.php?url=" + url;
});