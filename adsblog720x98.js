var textArray = ['https://imgur.com/FvP0LJd.png', 'https://imgur.com/fuJG7Fw.png', 'https://imgur.com/UwjtE4r.png', 'https://imgur.com/Qx4WXPr.png', 'https://i.imgur.com/ZIgu8IU.png'];
var randomAds = Math.floor(Math.random() * textArray.length);

function generateBlockAds(src) {
    var output = "";
    output += '<a href="https://siingroup.com/?utm_campaign=SiinGroup" target="_blank">';
    output += '<img src="' + src + '" id="rsSiinBlog" width="720px" height="90px"/>';
    output += '</a>';
    return output;
}
document.getElementById('adsSiinBlogCampaign').innerHTML = generateBlockAds(textArray[randomAds]);
