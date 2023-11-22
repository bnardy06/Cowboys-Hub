import express from "express"
import bodyParser from "body-parser"


const port = 3000;
const app = express();

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    //Make the get route work and render the index.ejs file.
    res.render("index.ejs");
  });

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

var quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
    "The way to get started is to quit talking and begin doing. -Walt Disney",
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking. -Steve Jobs",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
    "Be yourself; everyone else is already taken. -Oscar Wilde"
  ]
  function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
  }

  
 

  /*
  https://soundcloud.com/dina-bonnevie-i/nbc-sunday-night-football?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing
  */
  