const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    // res.send('Hello World!');
    res.sendFile(__dirname + "/index.html");
});

app.get('/bmiCalculator', function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function (req, res) {
    console.log(req.body);
    let n1 = Number(req.body.num1);
    let n2 = Number(req.body.num2);
    let result = n1 + n2;
    res.send('The result of the calculation is ' + result);
});

app.post('/bmiCalculator', function (req, res) {
    console.log(req.body);
    let w = parseFloat(req.body.weight);
    let h = parseFloat(req.body.height);// * 0.3048;
    let bmi = w / (h * h);
    res.send("Your BMI is " + bmi);
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});