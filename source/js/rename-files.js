import fs from 'fs';

const directoryPath = 'source/images/content/johnson-solids';

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Ошибка чтения каталога:', err);
    return;
  }

  files.forEach((file) => {
    const oldPath = `${directoryPath}/${file}`;
    const newFileName = file.replace(/_/g, '-');
    const newPath = `${directoryPath}/${newFileName}`;

    fs.rename(oldPath, newPath, (renameErr) => {
      if (renameErr) {
        console.error(`Ошибка переименования файла ${file}:`, renameErr);
      } else {
        console.log(`Файл ${file} успешно переименован в ${newFileName}`);
      }
    });
  });
});
