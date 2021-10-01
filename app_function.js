const fs = require('fs');
const path = require('path');

const folderMen = path.join(__dirname,'men');
const folderWomen = path.join(__dirname,'women');
const json =JSON.parse(data.toString());
const folderOld = path.join(oldFolder, fileName);
const folderNew = path.join(newFolder, fileName);

function sortPeople (oldFolder,newFolder,gender){
    fs.readdir(oldFolder, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        data.forEach(fileName => {
            fs.readFile(folderOld, (err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }

                if (json.gender === gender) {
                    fs.rename(folderOld,folderNew , (err) => {
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