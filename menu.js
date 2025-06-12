const btnMenu = document.getElementById('btn-menu');
const hidden = document.querySelectorAll('.menu, .carrito, .cuenta');
const head = document.getElementById('head');

let Openmenu = true;

btnMenu.addEventListener('click',
    function() {

        if (Openmenu != true) { 

            head.style.width = '70px';
            head.style.height = '70px';
            head.style.transition = '2s';

            hidden.forEach(hidden => {

                hidden.style.display = 'none';

            });

            btnMenu.style.margin = '5px 10px 0px 10px';

            localStorage.setItem('menu','close')

        } else 
        if(Openmenu = true) {

            head.style.width = '';
            head.style.height = '';
            head.style.transition = '2s';

            hidden.forEach(hidden => {

                hidden.style.display = '';

            });

            btnMenu.style.margin = '';

            localStorage.setItem('menu','open')

        }

        Openmenu = !Openmenu

    }

);

document.addEventListener('DOMContentLoaded',
    function() {

        const menuStatus = localStorage.getItem('menu');

        if(menuStatus === 'close') {

            head.style.width = '70px';
            head.style.height = '70px';
            head.style.transition = '2s';

            hidden.forEach(hidden => {

                hidden.style.display = 'none';

            });

            btnMenu.style.margin = '5px 10px 0px 10px';

        } else 
        if(menuStatus === 'open') {

            head.style.width = '';
            head.style.height = '';
            head.style.transition = '2s';

            hidden.forEach(hidden => {

                hidden.style.display = '';

            });

            btnMenu.style.margin = '';

        }

    }
);
