//EXAMPLES
try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
} catch (err) {
    console.error(err) // we can use console.log() or console.error()
    console.error('Name of the error: ' + err.name)
    console.error('Message: ' + err.message)
} finally {
    console.log('In any case I will be executed')
}
//throw
//throw 'Error2' // generates an exception with a string value
//throw 42 // generates an exception with the value 42
//throw true // generates an exception with the value true
//throw new Error('Required') // generates an error object with the message of Required

const throwErrorExampleFun = () => {
    let message = 'Enter a number: '
    let x = prompt(message)
    try {
        if (x == '') throw 'empty'
        if (isNaN(x)) throw 'not a number'
        x = Number(x)
        if (x < 5) throw 'too low'
        if (x > 10) throw 'too high'
    } catch (err) {
        console.log(err)
    }
}
throwErrorExampleFun()