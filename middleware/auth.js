// checks if a user is logged in
const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/auth/user')
};

// checks if a user is logged is a manager
const isManager = (req, res, next) => {
    if (req.isAuthenticated() && req.user.role === "Store Manager") {
        return next()
    }

    res.status(403).send("Access Denied! You're not a manager");
}


// checks if a user is logged is an admin 
const isAdmin = (req, res, next) => {
    if (req.isAuthenticated() && req.user.role === "Accounts/Admin") {
        return next()
    }

    res.status(403).send("Access Denied! You're not an admin");
}


// checks if a user is logged in as an attendant
const isAttendant = (req, res, next) => {
    if (req.isAuthenticated() && req.user.role === "Sales Attendant") {
        return next()
    }

    res.status(403).send("Access Denied! You're not a sales attendant");
}

const isManagerOrAdmin = (req, res, next) => {
    if (req.isAuthenticated() && (req.user.role === "Store Manager" || req.user.role ===  "admin")) {
        return next()
    }
    res.status(403).send("Access Denied! You're neither a Manager or Admin")
}

const isAttendantOrAdmin = (req, res, next) => {
    if (req.isAuthenticated() && (req.user.role === "Sales Attendant" || req.user.role ===  "Accounts/Admin")) {
        return next()
    }
    res.status(403).send("Access Denied! You're neither an Attendant or Admin")
}



module.exports = {
    isAuthenticated,
    isManager,
    isAdmin,
    isAttendant,
    isManagerOrAdmin,
    isAttendantOrAdmin
}