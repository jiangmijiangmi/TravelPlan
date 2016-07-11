function init(currentClass) {
    $(".header").load("header.html", function () {
        $(currentClass).addClass("active");

        new Vue({
            el: 'body',
            data: {
                baseURL: '/TravelPlan/html/admin'
            }
        });
    });
    $(".footer").load("footer.html");
}

function initCitySelection(city) {
    new Vue({
        el: '.city-selection',
        data: {
            countries: ['中国', '美国'],
            provinces: ['北京', '上海'],
            cities: ['北京'],
            selected: city
        }
    });
}
