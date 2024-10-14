document.getElementById('openLink').addEventListener('click', function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    var linkToOpen = urlParams;

    if (/android/i.test(userAgent)) {
        window.open('googlechrome://' + linkToOpen, '_blank');
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.open('https://teiresias22.github.io/invite', '_blank'); // iOS Safari will handle this
    } else {
        window.open(linkToOpen, '_blank');
    }
});