const express = require("express");
const path = require('path');

const app = express();
app.use(express.urlencoded({ extended: false })); 

app.use(express.static(path.join(__dirname, "public")));

// app.get('/', (req, res) => {
//     console.log(req);
//   res.send('<h1>トップページ!<h1>');
// });
app.post('/api/v1/quiz', function(req, res) {
  const answer = req.body.answer ;
  if (answer === '2') {
    res.redirect('/correct.html');
    // res.send('<h1>正解です！</h1>');
  } else {
    res.redirect('/wrong.html');
    // res.send('<h1>不正解です。</h1>');
    res.redirect('/wrong.html');
  }
  });


app.get('/api/v1/users', (req, res) => {

  console.log(req);
  res.send( { "name": "Mike", "age": 30, "address": "123 Main St" } );
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`サーバーがポート${PORT}で起動しました`);
  console.log(`http://localhost:${PORT}`);
});

