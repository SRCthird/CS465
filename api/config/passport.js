import passport from 'passport';
import { LocalStrategy } from 'passport-local';
import { model } from 'mongoose';

const User = model('users');
passport.use(new LocalStrategy(
  { usernameField: 'email' },
  (username, password, done) => {
    User.findOne({ email: username }, (err, user) => {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, {
          message: 'Incorrect username.'
        });
      }
      if (!user.validPassword(password)) {
        return done(null, false, {
          message: 'Incorrect password.'
        });
      }
      return done(null, user);
    });
  }
));
