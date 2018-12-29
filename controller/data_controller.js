exports.index = function(request, response) {
    var number = {test2: "number"}
    response.render("index", number);
};