const fs = require('fs');
const path = require('path');

const folderMen = path.join(__dirname,'men');
const folderWomen = path.join(__dirname,'women');

function sortPeople (oldFolder,newFolder,gender){
    fs.readdir(oldFolder, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        data.forEach(fileName => {
            fs.readFile(path.join(oldFolder, fileName), (err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }

                if (JSON.parse(data.toString()).gender === gender) {
                    fs.rename(path.join(oldFolder, fileName), path.join(newFolder, fileName), (err) => {
                        if (err) {
                            console.log(err);
                        }
                    });
                }
            });
        });

    });
}

sortPeople(folderWomen,folderMen,'male')
sortPeople(folderMen,folderWomen,'female')