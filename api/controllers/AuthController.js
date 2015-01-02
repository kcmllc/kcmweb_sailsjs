/**
 * TickerController
 *
 * @description :: Server-side logic for managing Tickers
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var google = require('googleapis');
var OAuth2Client = google.auth.OAuth2;

var CLIENT_ID = '170203394820-udbd9v0rtgf1r2h2lalha178ei05jp2g.apps.googleusercontent.com';
var CLIENT_SECRET = 'Pc0SDrJqB_PMhzB8174h4eqC';
var REDIRECT_URL = 'http://www.knightcapllc.com/auth/oauth2callback';

var oauth2client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);


var scopes = ['https://www.googleapis.com/auth/plus.login',
              'https://www.googleapis.com/auth/plus.me', 'https://www.googleapis.com/auth/userinfo.profile',
              'https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/admin.directory.group',
              'https://www.googleapis.com/auth/admin.directory.group.member', 'https://www.googleapis.com/auth/tasks',
              'https://www.googleapis.com/auth/admin.directory.user'];
  

module.exports = {
    login: function(req, res){
        if(req.session.username){
            res.redirect(req.originalUrl);
        }
        var url = oauth2client.generateAuthUrl({
            access_type: 'offline',
            scope: scopes.join(" ")
        });
        res.redirect(url);
    },
    logout: function(req, res){
        req.session.destroy();
        res.redirect('/');
        },
    oauth2callback: function(req, res){
        var code = req.param('code');
        oauth2client.getToken(code, function(err, tokens){
            oauth2client.setCredentials(tokens);
            google.options({ auth: oauth2client });

            req.session.plus = google.plus({ version: 'v1' });
            req.session.drive = google.drive({ version: 'v2' });
            req.session.admin = google.admin({ version: 'directory_v1' });
            req.session.plus.people.get({ userId: 'me' }, function(err, user){
                req.session.email = user.emails[0].value;
                req.session.admin.users.get({userKey: req.session.email}, function(err, userinfo){
                    req.session.username =  userinfo.name.givenName;
                    req.session.isLoggedIn = true;
                    req.isAdmin = true;
                    res.redirect('/');
                });
            });

        });
    }
};

