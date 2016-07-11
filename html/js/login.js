function init(currentClass) {
    $(".header").load("header.html", function () {
        $(currentClass).addClass("active");

        new Vue({
            el: 'body',
            data: {
                baseURL: '/TravelPlan/html'
            }
        });
    });
    $(".footer").load("footer.html");
}

function initCitySelection(city) {
    if (city == undefined || city.country == undefined ||
        city.province == undefined || city.city == undefined) {
        city = {
            country: null,
            province: null,
            city: null
        }
    }
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
