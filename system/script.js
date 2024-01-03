//import os from 'os';
/* const system = document.getElementById('system-info');


const systemInfo = `
    <h2>System Information</h2>
    <p>OS Type: ${os.type()}</p>
    <p>OS Platform: ${os.platform()}</p>
  `
system.innerHTML = systemInfo;


 */
const os = require('os')

const systemInfo = `
    <h2>System Information</h2>
    <p>OS Type: ${os.type()}</p>
    <p>OS Platform: ${os.platform()}</p>
  `
function get_Details(){
  //alert("Tst");
  document.getElementById('system-info').innerHTML =systemInfo
}
