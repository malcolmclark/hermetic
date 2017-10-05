'use strict'

module.exports = function() {

    return {
        Validate: (req, res, next) => {
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
        }
    }
}