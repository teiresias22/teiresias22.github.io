window.onload = function() {
    var visitTime = new Date().getTime();

    var isAndroid = /android/i.test(navigator.userAgent);
    var isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    if (isAndroid) {
        location.href = "https://play.google.com/store/apps/details?id=com.colorofdays.color_of_days&pcampaignid=web_share";
    } else if (isiOS) {
        location.href = "https://apps.apple.com/kr/app/id6443436725";
    }
}