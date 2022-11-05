/**
 * The Promise object represents the eventual completion (or failure) 
 * of an asynchronous operation and its resulting value.
 * 
 * The methods then(), catch(), and finally() are used to associate further 
 * action with a promise that becomes settled. 
 * As these methods return promises, they can be chained.
 */

/**
 * SpeakAfterNSecs returns a promise that resolves to the message after the
 * specified number of seconds.
 * @param seconds - The number of seconds to wait before resolving the promise.
 * @param message - The message to be spoken
 * @returns A promise that will resolve after the specified number of seconds.
 */
function speakAfterNSecs(seconds, message) {
    const timer = resolve => {
        setTimeout(() => resolve(message), 1000 * seconds)
    }
    return new Promise(timer)
}

speakAfterNSecs(3, 'Hello world')
    .then(message => message.concat('!!!'))
    .then(newMessage => console.log(newMessage))
    .catch(e => console.log(e))
