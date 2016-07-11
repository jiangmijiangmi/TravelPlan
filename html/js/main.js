function init(currentClass, second, login) {
    var prefix = '';
    if (second) {
        prefix = '../'
    }
    $(".header").load(prefix + "header.html", function () {
        $(currentClass).addClass("active");

        new Vue({
            el: 'body',
            data: {
                is_login: login,
                baseURL: '/TravelPlan/html'
            }
        });
    });
    $(".footer").load(prefix + "footer.html");
}

function initCitySelection(city) {
    new Vue({
        el: '.city-selection',
        data: {
            countries: ['中国', '美国'],
            provinces: ['北京', '上海'],
            cities: ['h','北京'],
            selected: city
        }
    });
}
