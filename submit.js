document.getElementById("Submit").addEventListener("click", submitTab);

function submitTab() {
    chrome.tabs.query({active:true,currentWindow:true},function(tab){
        var url = tab[0].url;
        var newURL = "http://PassReqs.umer936.com/submit.php?site=" + url;
    chrome.tabs.create({ url: newURL });
	});
};