function authenticationStatus(request, response, next) {
    response.locals.authenticate = request.authenticate();
    next();
};

module.exports = authenticationStatus;