function getMessages(req,res){
    res.send('<ul><li>Hello World!<li><ul>')
}

function postMessage(req,res){
    console.log('Updating messages...');
}

module.exports = {
    getMessages,
    postMessage,
}