'use strict'

const express = require('express');
const bodyParser = require('body-parser');  
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const port = 3001;

// Static Files 
app.use(express.static('content'));
app.use(express.static(path.join(__dirname + '/content/')));
app.use(express.json());

// Set Views
app.set('views', [__dirname + '/views/', __dirname + '/views/en', __dirname + '/views/tr', __dirname + '/views/ar', __dirname + '/views/en/product', __dirname + '/views/en/product/mercedes', __dirname + '/views/tr/urun', __dirname + '/views/tr/urun/mercedes-tr', __dirname + '/views/ar/el-muntec', __dirname + '/views/ar/el-muntec/mercedes-ar']);
app.set('view engine', 'ejs');

// Body parser middleware 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/email', (req, res) => {
    // TODO
    // send email here
    res.json({message: 'Message recieved!!! '});
});


app.get('/', (req, res) => res.render('index'));
// english page
app.get("/en", (req, res) => res.render("en"));

// turkish page
app.get("/tr", (req, res) => res.render("tr"));

// arabic page
app.get("/ar", (req, res) => res.render("ar"));

// about-us en
app.get("/en/about-us", (req, res) => res.render("about-us"));

// product en
app.get("/en/product", (req, res) => res.render("product"));

// contact en 
app.get("/en/contact", (req, res) => res.render("contact"));

// about-us tr
app.get("/tr/hakkimizda", (req, res) => res.render("hakkimizda"));

// product tr
app.get("/tr/urun", (req, res) => res.render("urun"));

// contact tr 
app.get("/tr/iletisim", (req, res) => res.render("iletisim"));

// about-us ar
app.get("/ar/hol-alshrk", (req, res) => res.render("hol-alshrk"));

// product ar
app.get("/ar/el-muntec", (req, res) => res.render("el-muntec"));

// contact ar 
app.get("/ar/ittisalat", (req, res) => res.render("ittisalat"));

// vision & mission en
app.get("/en/quality-policy", (req, res) => res.render("quality-policy"));

// vision & mission tr
app.get("/tr/kalite-politikamiz", (req, res) => res.render("kalite-politikamiz"));

// vision & mission ar
app.get("/ar/siyasetil-cevde", (req, res) => res.render("siyasetil-cevde"));

// corporate en
app.get("/en/corporate", (req, res) => res.render("corporate"));

// corporate tr
app.get("/tr/kurumsal", (req, res) => res.render("kurumsal"));

// corporate ar
app.get("/ar/elmuessese", (req, res) => res.render("elmuessese"));

// certificates en
app.get("/en/certificates", (req, res) => res.render("certificates"));

// certificates tr
app.get("/tr/belgelerimiz", (req, res) => res.render("belgelerimiz"));

// certificates ar
app.get("/ar/sehadat-el-cevda", (req, res) => res.render("sehadat-el-cevda"));

app.get('/en/product/man', (req, res) => res.render('man'));
app.get('/en/product/exhaust', (req, res) => res.render('exhaust'));
app.get('/en/product/iveco', (req, res) => res.render('iveco'));
app.get('/en/product/renault', (req, res) => res.render('renault'));
app.get('/en/product/mercedes', (req, res) => res.render('mercedes'));
app.get('/en/product/handle-gear', (req, res) => res.render('handle-gear'));
app.get('/en/product/scania', (req, res) => res.render('scania'));
app.get('/en/product/towing-tools', (req, res) => res.render('towing-tools'));
app.get('/en/product/others', (req, res) => res.render('others'));



// CHASSIS
app.get('/en/product/mercedes/mercedes-chassis', (req, res) => res.render('mercedes-chassis'));
// CAPIN
app.get('/en/product/mercedes/mercedes-capin', (req, res) => res.render('mercedes-capin'));
// GEAR
app.get('/en/product/mercedes/mercedes-gear', (req, res) => res.render('mercedes-gear'));
// BALANCE
app.get('/en/product/mercedes/mercedes-balance', (req, res) => res.render('mercedes-balance'));
// engine-parts
app.get('/en/product/mercedes/engine-parts', (req, res) => res.render('engine-parts'));

// tr products
app.get('/tr/urun/handle-gear-tr', (req, res) => res.render('handle-gear-tr'));
app.get('/tr/urun/exhaust-tr', (req, res) => res.render('exhaust-tr'));
app.get('/tr/urun/iveco-tr', (req, res) => res.render('iveco-tr'));
app.get('/tr/urun/man-tr', (req, res) => res.render('man-tr'));
app.get('/tr/urun/others-tr', (req, res) => res.render('others-tr'));
app.get('/tr/urun/scania-tr', (req, res) => res.render('scania-tr'));
app.get('/tr/urun/mercedes-tr', (req, res) => res.render('mercedes-tr'));
app.get('/tr/urun/renault-tr', (req, res) => res.render('renault-tr'));
app.get('/tr/urun/towing-tools-tr', (req, res) => res.render('towing-tools-tr'));
app.get('/tr/urun/mercedes-tr/mercedes-balance-tr', (req, res) => res.render('mercedes-balance-tr'));
app.get('/tr/urun/mercedes-tr/mercedes-chassis-tr', (req, res) => res.render('mercedes-chassis-tr'));
app.get('/tr/urun/mercedes-tr/mercedes-gear-tr', (req, res) => res.render('mercedes-gear-tr'));
app.get('/tr/urun/mercedes-tr/mercedes-capin-tr', (req, res) => res.render('mercedes-capin-tr'));
app.get('/tr/urun/mercedes-tr/engine-parts-tr', (req, res) => res.render('engine-parts-tr'));

// ar products
app.get('/ar/el-muntec/handle-gear-ar', (req, res) => res.render('handle-gear-ar'));
app.get('/ar/el-muntec/exhaust-ar', (req, res) => res.render('exhaust-ar'));
app.get('/ar/el-muntec/iveco-ar', (req, res) => res.render('iveco-ar'));
app.get('/ar/el-muntec/man-ar', (req, res) => res.render('man-ar'));
app.get('/ar/el-muntec/others-ar', (req, res) => res.render('others-ar'));
app.get('/ar/el-muntec/scania-ar', (req, res) => res.render('scania-ar'));
app.get('/ar/el-muntec/mercedes-ar', (req, res) => res.render('mercedes-ar'));
app.get('/ar/el-muntec/renault-ar', (req, res) => res.render('renault-ar'));
app.get('/ar/el-muntec/towing-tools-ar', (req, res) => res.render('towing-tools-ar'));

app.get('/ar/el-muntec/mercedes-ar/mercedes-balance-ar', (req, res) => res.render('mercedes-balance-ar'));
app.get('/ar/el-muntec/mercedes-ar/mercedes-chassis-ar', (req, res) => res.render('mercedes-chassis-ar'));
app.get('/ar/el-muntec/mercedes-ar/mercedes-gear-ar', (req, res) => res.render('mercedes-gear-ar'));
app.get('/ar/el-muntec/mercedes-ar/mercedes-capin-ar', (req, res) => res.render('mercedes-capin-ar'));
app.get('/ar/el-muntec/mercedes-ar/engine-parts-ar', (req, res) => res.render('engine-parts-ar'));

app.post(['/' ,'/tr' ,'/en' ,'/ar' ,'/en/contact', '/tr/iletisim', '/ar/ittisalat'], (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        debug: true,
        auth: {
            user: 'lewis11@ethereal.email',
            pass: 'JWbFxdkentb46SeBEw'
        }
    });

    const mailOptions = {
        from: req.body.email,   
        to: 'manu@manucompany.com',
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error);
            res.send(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success');
        }
    })
});

app.listen(port, ()=> {
    console.log(`Server running on Port ${port}`);
});
