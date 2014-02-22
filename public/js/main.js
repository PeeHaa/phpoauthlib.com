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
}());
