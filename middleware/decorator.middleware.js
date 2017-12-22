const helmet = require('helmet');
const cors = require('cors');
const bodyP = require('body-parser');
const morgan = require('morgan');


function decorate(app) {
  app.use(helmet());
  app.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'none'"],
      styleSrc: ["'none'"],
      imgSrc: ["'none'"],
      connectSrc: ["'self'"],
      fontSrc: ["'none'"],
      objectSrc: ["'none'"],
      mediaSrc: ["'none'"],
      frameSrc: ["'none'"],
      reportUri: '/api/report-violation'
    },
    reportOnly: true
  }));

  app.use(morgan('common'));

  app.use(cors({
    origin: ["http://localhost:8008"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"]
  }));
  app.use(bodyP.json());
  app.use(bodyP.urlencoded({ extended: true }));

  return app;
}

module.exports = decorate;