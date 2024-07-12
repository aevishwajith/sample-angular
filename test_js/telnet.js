const telnet = require('telnet-client').Telnet;
const fs = require('fs');
const connection =  new telnet();

// Connection parameters
const params = {
  host: '10.19.40.200',
  port: 23,
  //shellPrompt: '/ # ',
  //timeout: 1500,
  //loginPrompt: 'login: ',
  //passwordPrompt: 'Password: ',
  username: 'admin',
  password: 'securesify',
  //execTimeout: 60000,
  //sendTimeout: 30000,
  //irs: '\r',
  //ors: '\n',
  //echoLines: 1,
};

// Helper function to execute commands
async function execCommand(command) {
  try {
    let res = await connection.exec(command);
    console.log(res);
    return res;
  } catch (err) {
    console.error('Error executing command:', err.message);
  }
}

async function modifyFile() {
  try {
    await connection.connect();
    console.log("connected succssfully");

    // Read the file
   /* let data = await execCommand('cat /home/krishna/sifyioni/extras/testData/sample.txt');

    // Modify file
    const findADGindex = data.indexOf("allowdowngrade");
    const agdlen = "allowdowngrade".length;
    const startind = findADGindex + agdlen;
    const find_else_ind = data.indexOf("else", startind);
    const elselen = "else".length;
    const startind_ = find_else_ind + elselen;
    const find_return0_ind = data.indexOf("return 0", startind_);
    const firstpart = data.substring(0, find_return0_ind);
    const find_return0_length = "return 0".length;
    const replacetext = "return 1";
    const secondpart = data.substring(find_return0_ind + find_return0_length);
    const replacedstr = firstpart + replacetext + secondpart;
    console.log(replacedstr);

    // Write modified file to a temporary location
    const tempFilePath = '/home/krishna/sifyioni/extras/testData/sample_modified.txt';
    await execCommand(`echo "${replacedstr}" > ${tempFilePath}`);

    // Replace the original file with the modified file
    await execCommand(`mv ${tempFilePath} /home/krishna/sifyioni/extras/testData/sample.txt`);
    console.log('File written successfully');*/

    // Close the connection
    connection.end();
  } catch (err) {
    console.error('Error during Telnet session:', err.message);
  }
}

modifyFile();
