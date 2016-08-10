document.getElementById("Submit").addEventListener("click", submitTab);

function submitTab() {
    var newURL = "http://PassReqs.umer936.com/submit.php";
    chrome.tabs.create({ url: newURL });
};