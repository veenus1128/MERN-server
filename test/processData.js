const {getData,getRaw}=require('./utils');
function processData(){
    return `processed:${getData()}`;
    //should return processed real data
}
function processRaw(){
    return getRaw();
}
module.exports={processData,processRaw};