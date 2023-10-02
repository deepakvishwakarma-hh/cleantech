const fs = require("fs");
const path = require("path");

// Specify the directory where your images are located
const directoryPath = "/cleantech/public/sub";

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  files.forEach((file) => {
    const oldFilePath = path.join(directoryPath, file);
    const newFileName = file
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/[,()]/g, ""); // Remove commas, parentheses, and other special characters

    const newFilePath = path.join(directoryPath, newFileName);

    fs.rename(oldFilePath, newFilePath, (renameErr) => {
      if (renameErr) {
        console.error(`Error renaming file ${file}:`, renameErr);
      } else {
        console.log(`Renamed ${file} to ${newFileName}`);
      }
    });
  });
});
