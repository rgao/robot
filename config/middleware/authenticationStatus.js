function authenticationStatus(request, response, next) {
    response.locals.isAuthenticated = request.isAuthenticated();
    next();
};

module.exports = authenticationStatus;