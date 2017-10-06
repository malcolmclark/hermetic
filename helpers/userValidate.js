'use strict'

module.exports = function() {

    return {
        signup: (req, res, next) => {
            req.checkBody('username', 'Username is required').notEmpty()
            req.checkBody('username', 'Username must not be less than 6').isLength({ min: 6 })
            req.checkBody('email', 'Email is required').notEmpty()
            req.checkBody('email', 'Email is invalid').isEmail()
            req.checkBody('password', 'Password is required').notEmpty()
            req.checkBody('password', 'Password must not be less than 6').isLength({ min: 6 })

            req.getValidationResult()
                .then((result) => {
                    const errors = result.array()
                    const messages = []

                    errors.forEach((error) => {
                        messages.push(error.msg)
                    })

                    req.flash('error', messages)
                    res.redirect('/signup')

                })
                .catch((err) => {
                    return next()
                })
        },
        login: (req, res, next) => {
            /* req.checkBody('username', 'Username is required').notEmpty()
             req.checkBody('username', 'Username must not be less than 6').isLength({ min: 6 })*/
            req.checkBody('email', 'Email is required').notEmpty()
            req.checkBody('email', 'Email is invalid').isEmail()
            req.checkBody('password', 'Password is required').notEmpty()
            // Can also ensure it contains special character etc
            req.checkBody('password', 'Password must not be less than 7').isLength({ min: 7 })

            req.getValidationResult()
                .then((result) => {
                    const errors = result.array()
                    const messages = []

                    errors.forEach((error) => {
                        messages.push(error.msg)
                    })

                    req.flash('error', messages)
                    res.redirect('/')

                })
                .catch((err) => {
                    return next()
                })
        }

    }


}