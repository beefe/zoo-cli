
module.exports = {
    cli: {
        run(){
            console.log(readJSON('./package.json').version);
        }
    }
};

function readJSON(jsonPath){
    const fs = require('fs');
    if(!fs.existsSync(jsonPath)){
        return console.error(`unable to read file [${jsonPath}]: No such file or directory.`);
    }
    const content = fs.readFileSync(jsonPath);
    let result = null;
    try {
        result = JSON.parse(content);
    }
    catch(e){
        console.error(`parse json file [${jsonPath}] error: ${e.message}`);
    }
    return result;
};