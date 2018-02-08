const express = require('express');
const bodyParser = require('body-parser');
var process = require('child_process');
var spawn = require('child_process').spawn;
const app = express();
const fs = require('fs');
const kue = require('kue');
app.use(bodyParser.json());
app.use(require('morgan')('dev'));

var jobQueue = [];


app.get('/addjob',(req,res,next)=>{
    var job = req.body;
    if(jobQueue.length===0){
        
    }
    else{
        for(var i =0; i<jobQueue.length;i++){
            
        }
    }
    
})


app.listen(9000);
console.log('app is running on http://localhost:9000')
// function processHandler(jobData, done){
//     console.log("process handler called");
//     var posProc;
//     posProc = spawn("TestConsoleApp.exe",[],{
//         stdio:'pipe',
//         shell:true
//     });
//         //var result;
//         posProc.stdout.on('data', (data)=>{
//             console.log(`stdout: ${data}`);
//             //result=data;
//             //return doneCallback('',data)
//         });
//         posProc.stdout.on('exit', (code)=>{
//             console.log(`stdout exiting : ${code}`);
//             //result=code;
//             done('',code)
//         })
//         posProc.stdout.on('error',(err)=>{
//             console.log(`stderr: ${err}`);
//             done(err,'')
//         })
//         posProc.stderr.on('data', (data) => {
//             //console.log(`stderr: ${data}`);
//             //result=data;
//             //doneCallback(data,'')
//         });
//         posProc.on('close', (code) => {
//             console.log(`child process exited with code ${code}`);
//             //result=code;
//             //doneCallback('',code)
//         });

//     var newArgs=JSON.stringify(jobData);
//     posProc.stdin.write(newArgs+"\n")
// }
// function jobHandler(jobData, done){
//     console.log("job handler called");
//     // done();
    
//     //posProc.stdin.write(newArgs+"\n")
//     //var err = "no error"
//     //doneCallback(result);
//     processHandler(jobData, done)
// }

// var doneCallback = (err,result)=>{
//     if(err){
//         return err;
//     }
//     return result;
// }
// var queue = kue.createQueue();
// queue.process('job', 1,function(job,done){
//     jobHandler(job.data, done);
// });

// var allJobs =[
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod1","methodParams":{"param1":"hello","param2":"bye"}},
//     {"className":"TestConsoleApp.Tasks.Task1","methodName":"TestMethod2","methodParams":{"param1":"hello method 2"}}
// ];
//  app.get('/', (req,res)=>{
//      var job;
//     for(var i =0; i<allJobs.length;i++){
//         job = queue.create('job', allJobs[i]).removeOnComplete(true).save();
//         job.on('complete', function(result){
//             console.log('Job completed with data ', result);
          
//           }).on('failed attempt', function(errorMessage, doneAttempts){
//             console.log('Job attempt failed with error:', errorMessage);
          
//           }).on('failed', function(errorMessage){
//               if(errorMessage!=='')
//                 console.log('Job failed with error:', errorMessage);
//               else
//                 job.emit('complete')
          
//           }).on('progress', function(progress, data){
//             console.log('\r  job #' + job.id + ' ' + progress + '% complete with data ', data );
          
//           });
        
//     }
//     queue.process('job', 10,function(job,done){
//             jobHandler(job.data, done);
//         });
// });
// app.get('/:newArgs', (req,res)=>{
//     // var newArgs = req.params.newArgs;
//     // posProc.stdin.write(newArgs+"\n");
// })
// app.get('/next', (req,res)=>{
//     // var newArgs= ["Task1","TestMethod2","param1"]
//     // posProc.stdin.write(newArgs+"\n");
    
// })
//app.listen(9000);
//console.log('app is running on http://localhost:9000')




//posProc.stdin.setEncoding = 'utf-8';
    //posProc.stdin.write(["hey"])

    // var execCmd = "TestConsoleApp.exe"
    // //var execCmd = "dotnet run --project D:/Projects/TestConsoleApp/TestConsoleApp hello"
    // process.exec(execCmd,
    //     function (error, stdout, stderr) {
    //         if(error){
    //             res.status(500).send(error)
    //         }
    //         else if(stderr){
    //             res.status(500).send(stderr)
    //         }
    //         else if(stdout){
    //             res.status(200).send(stdout)
    //         }
    //         else{
    //             res.send("nothing")
    //         }
    //     });
    //res.send("hello")



    // var child = require('child_process').execFile('TestConsoleApp.exe', [ 
    //     'hello', 
    // ], function(err, stdout, stderr) { 
    //     // Node.js will invoke this callback when the 
    //     console.log(stdout); 
    // });

    // var exCmd = process.exec("node -v",['testfolder']);
    // exCmd.stdout.on('data',(data)=>{
    //     console.log(`stdout on data: ${data}`)
    //     res.send(`stdout on data: ${data}`)
    // })
    // exCmd.stdout.on('exit',(code)=>{
    //     console.log(code)
    // })
    // exCmd.stderr.on('data',(data)=>{
    //     console.log(`stderr on data: ${data}`)
    // })