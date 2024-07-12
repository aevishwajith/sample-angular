const Client = require('ssh2').Client;
const fs = require('fs');

// Create a new SSH client instance
const sshClient = new Client();

// Configure the connection parameters
const connectionParams = {
  host: '119.226.225.201',
  username: 'root',
  password:'Be@c0nDev17'
};

// Connect to the SSH server
sshClient.connect(connectionParams);
sshClient.on('ready', (res) => {

    console.log('Connected via SSH!');
    sshClient.sftp((err,sftp)=>{
       if(err){
        console.error('Error connecting sftp:', err);
       }
       const remotepath = '/home/krishna/sifyioni/extras/testData/sample.txt';
        sftp.readFile(remotepath,(err,data)=>{
          if(err){
            console.error('Error reading file:', err.message);
          }
          data = data.toString();
          //console.log("data",data);

          //modify file
          var findADGindex = data.indexOf("allowdowngrade");
var agdlen = "allowdowngrade".length-1;
var startind = findADGindex+agdlen
console.log(startind);
var find_else_ind = data.indexOf("else",startind);
var elselen = "else".length-1;
var startind_ = find_else_ind + elselen;
var find_return0_ind = data.indexOf("return 0",startind_);
var firstpart = data.substring(0,find_return0_ind);
var find_return0_length = "return 0".length;
var replacetext = "return 1";
var secondpart = data.substring(find_return0_ind+find_return0_length,data.length);
var replacedstr = firstpart + replacetext + secondpart
console.log(replacedstr)
//modify file ends


         // var repalcesstr = data.replace('test','sample')
          sftp.writeFile(remotepath,replacedstr,(err)=>{
            if(err){
                console.error('Error writting file:', err.message);
            }
            console.log("file written success");
            sftp.end();
            sshClient.end();
          })
          
        })
    })
    

});

// Handle errors during the SSH connection process

sshClient.on('error', (err) => {

    console.error('Error connecting via SSH:', err.message);


});