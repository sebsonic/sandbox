const questions = require('./questions');
const users = require('./users');
const other = require('./other');
module.exports = (app) => {
    questions(app);
    users(app);
    other(app);
}