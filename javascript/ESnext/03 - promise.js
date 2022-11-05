/**
 * The Promise object represents the eventual completion (or failure) 
 * of an asynchronous operation and its resulting value.
 * 
 * The methods then(), catch(), and finally() are used to associate further 
 * action with a promise that becomes settled. 
 * As these methods return promises, they can be chained.
 */

function speakAfterNSecs(seconds, message) {
    return new Promise((resolve, reject) => {
        setTimeout(_ => {
            resolve(message)
        }, 1000 * seconds)
    })
}

speakAfterNSecs(3, 'Hello world')
    .then(message => message.concat('!!!'))
    .then(newMessage => console.log(newMessage))
    .catch(e => console.log(e))
