module.exports = function(request, response, next) {
    if (request.user) {
        return next();
    }
    request.flash("unAuthenticated", "Please log in first. Redirecting...");
    return response.redirect("/login");
}