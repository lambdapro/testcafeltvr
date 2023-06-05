var request = require('request');
var fs = require('fs');

async function uploadScreenshot(name) {
    console.log("Uploading screenshot " + name);
    // Upload screenshot to some server
    var options = {
        'method': 'POST',
        'url': 'https://api.lambdatest.com/automation/smart-ui/v2/upload',
        'headers': {
          'Authorization': 'enter basic auto here'
        },
        formData: {
          'projectToken': 'enter project token here',
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
