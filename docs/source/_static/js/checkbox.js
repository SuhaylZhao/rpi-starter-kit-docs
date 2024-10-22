
// JavaScript for toggling the dropdown content


// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    console.log('Hello, onclick!');
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
};

$(document).ready(
    function () {
        console.log('Hello, World!');
        document.querySelectorAll('.dropdown-checkbox .dropbtn').forEach(function (dropbtn) {
            console.log('Hello, querySelectorAll!');
            dropbtn.addEventListener('click', function () {
                console.log('Hello, addEventListener!');
                var dropdownContent = this.parentNode.querySelector('.dropdown-content');
                if (dropdownContent.style.display === 'block') {
                    dropdownContent.style.display = 'none';
                } else {
                    dropdownContent.style.display = 'block';
                }
            });
        });
    }
);

