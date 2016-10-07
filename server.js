var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleOne = {
    title: 'Article One | Dinakar R',
    heading: 'Article One',
    date: 'October 7, 2016',
    content: `
                <p>
                    This is my first article. In this article I am planning to practice things learnt so far on IMAD-Hasura...even though i find the linkages from the server to be tenous and a bit confusing I hope things will become clearer as we go along..I am particularly concerned about how the page I am creating right now links to the server.
                </p>
                <p>
                    This is my first article. In this article I am planning to practice things learnt so far on IMAD-Hasura...even though i find the linkages from the server to be tenous and a bit confusing I hope things will become clearer as we go along..I am particularly concerned about how the page I am creating right now links to the server.
                </p>
                <p>
                    This is my first article. In this article I am planning to practice things learnt so far on IMAD-Hasura...even though i find the linkages from the server to be tenous and a bit confusing I hope things will become clearer as we go along..I am particularly concerned about how the page I am creating right now links to the server.
                </p>'
    
};
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req, res){
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two', function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
