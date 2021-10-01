const fs = require('fs');
const path = require('path');
const folderMen = path.join(__dirname,'men');
const folderWomen = path.join(__dirname,'women');
fs.readdir(folderWomen, (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    data.forEach(fileName => {
        fs.readFile(path.join(folderWomen, fileName), (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            if (JSON.parse(data.toString()).gender === 'male') {
                fs.rename(path.join(folderWomen, fileName), path.join(folderMen, fileName), (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
            }
        });
    });

});


fs.readdir(folderMen,(err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    data.forEach(fileName => {
        fs.readFile(path.join(folderMen, fileName), (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            if (JSON.parse(data.toString()).gender === 'female') {
                fs.rename(path.join(folderMen, fileName), path.join(folderWomen, fileName), (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
            }
        });
    });
});
