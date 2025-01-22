// const http = require("http");

// const calculate=require("./calculator")
// let v=calculate.add(10,20);

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.end(v);
// });
// server.listen(3000, () => {
//   console.log("Server running at http://127.0.0.1:3000/");
// });

 const fs = require("fs");
// fs.readFile("sample.txt","utf8" ,(err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });



// const newPerson = {
//   name: "John",
//   age: 30,
//   city: "New York",
//   amount: 1500,
// };

// fs.readFile("sample.json", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   const json = JSON.parse(data);
//   const newList = [...json, newPerson];
//   fs.writeFile("sample.json", JSON.stringify(newList), (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//   });
//   console.log(json);
// });

fs.readFile("sample.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const json = JSON.parse(data);
  const newList = json.filter((value) => {
    return value.id != 4;
  });
  fs.writeFile("sample.json", JSON.stringify(newList), (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
  console.log(json);
});

const addData = (id, newData) => {
  fs.readFile("sample.json", "utf8", (err, fileData) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    let json = [];
    try {
      json = JSON.parse(fileData);
    } catch (parseErr) {
      console.error("Error parsing JSON:", parseErr);
      return;
    }

    const updatedJson = [...json, { id, data: newData }];
    fs.writeFile(
      "sample.json",
      JSON.stringify(updatedJson, null, 2),
      (writeErr) => {
        if (writeErr) {
          console.error("Error writing file:", writeErr);
          return;
        }
        console.log("Data added successfully!");
      }
    );
  });
};

const deleteData = (id) => {
    fs.readFile("sample.json", "utf8", (err, fileData) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }

        let json = [];
        try {
            json = JSON.parse(fileData);
        } catch (parseErr) {
            console.error("Error parsing JSON:", parseErr);
            return;
        }

        const updatedJson = json.filter((value) => value.id !== id);

        fs.writeFile(
            "sample.json",
            JSON.stringify(updatedJson, null, 2),
            (writeErr) => {
                if (writeErr) {
                    console.error("Error writing file:", writeErr);
                    return;
                }

                console.log(`Data with ID ${id} deleted successfully!`); 
            }
        );
    });
};



const updateData = (id, newData) => {
    fs.readFile("sample.json", "utf8", (err, fileData) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }

        let json = [];
        try {
            json = JSON.parse(fileData);
        } catch (parseErr) {
            console.error("Error parsing JSON:", parseErr);
            return;
        }

        const updatedJson = json.map((item) =>
            item.id === id ? { id, data: newData } : item
        );

        fs.writeFile(
            "sample.json",
            JSON.stringify(updatedJson, null, 2),
            (writeErr) => {
                if (writeErr) {
                    console.error("Error writing file:", writeErr);
                    return;
                }

                console.log(`Data with ID ${id} updated successfully!`); 
            }
        );
    });
};

const readData = () => {
  fs.readFile("sample.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const json = JSON.parse(data);
    console.log(json);
  });
};

updateData(4,{ name: "Sam", age: 35, city: "Chennai", amount: 3500 })
readData();