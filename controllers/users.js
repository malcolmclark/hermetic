'use strict'

module.exports = function(_, passport, userValidate) {

    return {

        SetRouting: function(router) {
            router.get('/', this.indexPage)
            router.get('/signup', this.signUp)
            router.get('/home', this.homePage)
            router.post('/', userValidate.login, this.postLogin)
            router.post('/signup', userValidate.signup, this.postSignUp)
        },
        // somehow render() always looks for a folder called 'views'
        indexPage: function(req, res) {
        	const errors = req.flash('error')
            return res.render('index', { title: 'Chat Login', messages: errors, hasErrors: errors.length > 0 })
        },
        signUp: function(req, res) {
            const errors = req.flash('error')
            return res.render('signup', { title: 'Chat Signup', messages: errors, hasErrors: errors.length > 0 })
        },

        postSignUp: passport.authenticate('local.signup', {
            successRedirect: '/home',
            failureRedirect: '/signup',
            failureFlash: true // allows flash msgs
        }),
        postLogin: passport.authenticate('local.login', {
            successRedirect: '/home',
            failureRedirect: '/',
            failureFlash: true // allows flash msgs
        }),

        homePage: function(req, res) {
            return res.render('home')
        },


    }
}