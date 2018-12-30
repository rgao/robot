exports.data = function(request, response) {
    var number = {test2: "number"}
    response.render("data/data", number);
};