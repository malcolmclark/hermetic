const dependable = require("dependable")
const path = require("path") // inbuiñt module so no need to install it
const container = dependable.container()
const simpleDependencies = [
    ['_', 'lodash'],
    ['passport', 'passport']
]


// here we register the mods with the container

simpleDependencies.forEach(function(val) {

    container.register(val[0], function() {
        return require(val[1])
    })
})

// other home made mods to register
container.load(path.join(__dirname, '/controllers'))
container.load(path.join(__dirname, '/helpers'))

// finally we need to register container itself
container.register('conatiner', function() {
    return container
})

module.exports = container