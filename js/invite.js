window.onload = function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const inviteCode = urlParams.get('9c0f5f62-6b42-49dc-8e36-50765f323661');

    if (inviteCode) {
        document.body.innerHTML += `<p>Your invite code is: ${inviteCode}</p>`;
    }
};
