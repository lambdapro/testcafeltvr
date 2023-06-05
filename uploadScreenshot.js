var request = require('request');
var fs = require('fs');

async function uploadScreenshot(name) {
    console.log("Uploading screenshot " + name);
    // Upload screenshot to some server
    var options = {
        'method': 'POST',
        'url': 'https://api.lambdatest.com/automation/smart-ui/v2/upload',
        'headers': {
          'Authorization': 'Basic bXVkYXNzYXJzOjJhUDhQVW1Qcm1wY0g1V1NGRDFkdGVENVBobWhQQ2g2MVNOSkRZQWdGN1hDRXgzM3RI'
        },
        formData: {
          'projectToken': '550422#adc58e6b-7138-40a9-84a0-10cd6af8d2be#f1',
          'screenshotNames': name,
          'files': {
            'value': fs.createReadStream('./screenshots/' + name + '.png'),
            'options': {
              'filename': name + '.png',
            }
          }
        }
      };
      await request(options, function (error, response) {
        console.log(response,error);
        if (error) throw new Error(error);

        console.log(response.body);
      });
    
};

export {fs,uploadScreenshot};