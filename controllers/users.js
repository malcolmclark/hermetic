'use strict'

module.exports = function(_) {



    return {

        SetRouting: function(router) {
            router.get('/', this.indexPage)
            router.get('/signup', this.signUp)
        },
        // somehow render() always looks for a folder called 'views'
        indexPage: function(req, res) {
            return res.render('index', { test: 'this is a test!' })
        },
        signUp: function(req, res) {
            return res.render('signup')
        }


    }
}