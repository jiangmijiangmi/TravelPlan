function init(currentClass, second) {
    var prefix = '';
    if (second) {
        prefix = '../'
    }
    $(".header").load(prefix + "header.html", function () {
        $(currentClass).addClass("active");

        new Vue({
            el: '.navbar',
            data: {
                is_login: false,
                baseURL: '/TravelPlan/html'
            }
        });
    });
    $(".footer").load(prefix + "footer.html");
}
