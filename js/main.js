$(document).ready(function () {


    $('.toggle-btn').on('click', function (event) {
        $('.show-hidden').toggle(1000);
        $('.hide-shown').toggle(1000);
    });


    const pageItem = document.querySelectorAll('.page-item');
    const pageCont = document.querySelectorAll('.page-content');

    pageItem.forEach((el, i) => {

        el.addEventListener('click', function (e) {
            e.preventDefault();
            const contentAdd = el.parentElement.parentElement.nextElementSibling.children;
            console.log(contentAdd);
            pageItem.forEach((ele, i) => {
                ele.classList.remove('active');
                const content = ele.parentElement.parentElement.nextElementSibling.children;
                content[i].classList.remove('page-content-active');
            });
            el.classList.add('active');
            contentAdd[i].classList.add('page-content-active');
        });

    });

});