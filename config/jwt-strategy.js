const Employee = require("../models/employee");

var JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;

var passport = require("passport");

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "Employee";

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await Employee.findById(jwt_payload._id);
      console.log(user);
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (err) {
      return done(err, false);
    }
  })
);

module.exports = passport;
