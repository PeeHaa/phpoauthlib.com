(function() {
    var featureList = document.querySelector('.features ul');

    if (featureList) {
        featureList.addEventListener('click', function(e) {
            if (e.target.nodeName === 'UL') {
                return;
            }

            if (e.target.nodeName === 'A') {
                e.stopPropagation();
                return;
            }

            var listItem = e.target;
            while (listItem.nodeName !== 'LI') {
                listItem = listItem.parentNode;
            }

            var link = listItem.querySelector('a');

            if (link.getAttribute('target') === '_blank') {
                window.open(link.getAttribute('href'));
            } else {
                location.href = link.getAttribute('href');
            }
        });
    }

    function showPopup(content) {
        var overlay = document.createElement('div');
        overlay.setAttribute('class', 'overlay');

        var popup = document.createElement('div');
        popup.setAttribute('class', 'popup');

        popup.innerHTML = content;

        var body = document.getElementsByTagName('body')[0];

        body.appendChild(overlay);
        body.appendChild(popup);

        overlay.addEventListener('click', function(e) {
            popup.parentNode.removeChild(popup);
            overlay.parentNode.removeChild(overlay);
        });
    }

    document.addEventListener('click', function(e) {
        if (e.target.nodeName !== 'A' || e.target.getAttribute('href') !== '/attribution') {
            return;
        }

        var request = new XMLHttpRequest();

        request.onreadystatechange = function() {
            if(request.readyState == 4 && request.status == 200) {
                result = JSON.parse(request.responseText);

                showPopup(result.body);
            }
        };

        request.open('GET', e.target.getAttribute('href'), true);
        request.send();

        e.preventDefault();
    });
}());
