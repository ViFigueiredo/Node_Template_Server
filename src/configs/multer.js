const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, res, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) =>
    cb(null, file.originalname + Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

module.exports = upload;

// Exemplo de rota
// app.post('/upload', upload.array('files', 10), (req, res) => {
//   res.send('Arquivo recebido...');
// });
