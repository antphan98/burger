const connection = require("./connection");

function printQuestionMarks(num) {

    const array = [];
    for (let i = 0; i < num; i++) {
        array.push("?");
    }
    return array.toString();

};

function objToSql(ob) {
    const array = [];

    for (const key in ob) {
        const value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf("") >= 0) {
                value = "'" + value + "'";

            }
            array.push(key + "=" + value);

        }
    }
    return array.toString();
}

const orm = {
    all: function (tableInput, cb) {
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function (table, cols, vals, cb) {
        const queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    update: function (table, objColVals, condition, cb) {
        const queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};


module.exports = orm;