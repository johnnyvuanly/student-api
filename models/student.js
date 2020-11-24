module.exports = (sequelize, DataTypes) => { // module.exports is a function or an object or a piece of data that this file provides 
    let Student = sequelize.define('Student', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        starID: {
            type: DataTypes.STRING,
            allowNull: false, // allowNull and unique are constraints in the sequelize library
            unique: true
        },
        present: {
            type: DataTypes. BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    })
    // Changed force to false which will stop our table from being dropped and recreated it next time we start the app up
    Student.sync( {force: true} ).then( () => { // this returns a promise that's why we use then
        console.log('Synced student table ')
    }) 

    return Student
}