'use strict'

module.exports = function(_, passport, signupValidation) {

    return {

        SetRouting: function(router) {
            router.get('/', this.indexPage)
            router.get('/signup', this.signUp)
            router.get('/home', this.homePage)
            router.post('/signup', signupValidation.Validate, this.postSignUp)
        },
        // somehow render() always looks for a folder called 'views'
        indexPage: function(req, res) {
            return res.render('index', { test: 'this is a test!' })
        },
        signUp: function(req, res) {
            const errors = req.flash('error')
            return res.render('signup', { title: 'Chat Login', messages: errors, hasErrors: errors.length > 0 })
        },

        postSignUp: passport.authenticate('local.signup', {
            successRedirect: '/home',
            failureRedirect: '/signup',
            failureFlash: true // allows flash msgs
        }),
        homePage: function(req, res) {
            return res.render('home')
        },


    }
}