function readFileAsync(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (event) => { 
            const content = event.target.result;
            resolve(content);
        };

        reader.onerror = (event) => {
            reject(event.target.error);
        };

        if (file.type.startsWith("text")) {
            reader.readAsText(file);
        } else if (file.type.startsWith("image")) {
            reader.readAsDataURL(file);
        } else if (file.type.startsWith("video")) {
            reader.readAsDataURL(file);
        } else {
            reject("Unsupported file type: " + file.type);
        }
        if (!file) { 
            output.style.color = "red";
            output.innerHTML = "Error: No file selected!";
            return; 
        }
        
    });
}
function countSymbols() {
    

}

function displayImage(content, width, height) {
    const output = document.getElementById("outputFile");
    output.innerHTML = `<img width=${400}; height=${400}; src="${content}" alt="image" />`; 
}
function displayVideo(content, width, height,loop) {
    const output = document.getElementById("outputFile");
    output.innerHTML = `<video  width=${400}; height=${400};  src="${content}" alt="image" />`; 

}

function handleFile() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
    const output = document.getElementById("outputFile");    
    const symbolLength = document.getElementById("totalSymbols");
    const typeFile = document.getElementById("fileType");
    const totalWords = document.getElementById("totalWords");
    
    if (!file) { 
        output.style.color = "white";
        output.innerHTML = "Please, select file!";
        return; 
    }

    readFileAsync(file).then((fileContent) => {
        if (file.type.startsWith("text")) {
            output.innerHTML = fileContent;

            typeFile.innerHTML = "Text";

            symbolLength.innerHTML = fileContent.length;
            
            const words = fileContent.split(" ");
            
            totalWords.innerHTML = "IDK";
            
        } else if (file.type.startsWith("image")) {
            displayImage(fileContent, 360, 240);
            typeFile.innerHTML = "image";
        } else if (file.type.startsWith("video")) {
            displayVideo(fileContent);
            typeFile.innerHTML = "video";
        };
    }).catch((error) => {
        output.style.color = "red";
        output.innerHTML = "Error: " + error;
    });

    // console.log(fileContent);
}

handleFile();
