exports.index = function(request, response) {
    var testo = {test: "rawr"}
    response.render("index", testo);
};

