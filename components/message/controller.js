const store = require('./store');

function addMessage(user, message){
    return new Promise((resolve, reject) => {
        if(!user || !message)
        {
            console.error('[Message Controler]: No hay usuario o mensaje');
            reject('Invalid parameters');
            return false;
        }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        }
        store.add(fullMessage);
        resolve(fullMessage);
        console.log(fullMessage)
    });
};

function getMessage(){
    return new Promise((resolve, reject) => {
        resolve(store.list());
    })
}

module.exports = {
    addMessage,
    getMessage
}