const { hashpass, passcompare } = require("../helpers/bcrypt");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const model = require("../models/userModel")

const registerController = async (req, res) => {
    try {
        const { name, email, pass } = req.body;
        if (!name || !email || !pass || pass.length < 6) {
            return res.status(400).send({
                success: false,
                message: "Enter all details and ensure the password is at least 6 characters long, email must be unique."
            });
        }

        // Add logic for successful registration here
        const hashedpass = await hashpass(pass);
        console.log("hashed pass" + hashedpass);

        const user = await model({ name, email, pass: hashedpass }).save();

        res.status(200).send({
            success: true,
            message: "Registration successful",
            data: { name, email }
            //     });
        })
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({
            success: false,
            message: "Internal Server Error"
        });
    }
};

const loginController = async (req, res) => {
    console.log(req.body);

    try {
        const { email, pass } = req.body
        if (!email || !pass) {
            return res.status(500).send({
                success: false,
                message: "may you email and pass not provided"
            })
        }

        const user = await model.findOne({ email })
        console.log("user" + user);
        if (!user) {
            return res.status(500).send({
                success: false,
                message: "user not found"
            })
        }

        var match = await passcompare(pass, user.pass);
        // const match = await bcrypt.compare(pass, user.pass).then((result) => {
        //     console.log(result +"of compare");
        //     return result;
        // });

        console.log(pass + " " + user.pass);
        console.log("match " + match);

        if (!match) {
            return res.status(500).send({
                success: false,
                message: "pasword incorect",
                user
            })
        }

        var token = jwt.sign({ token: user.id }, 'shhhhh', { expiresIn: "7d" });
        // console.log(token);

        res.status(200).send({
            success: true,
            message: "login sucessful",
            user,
            token
        })

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "error in login code"
        })
    }

}

const userUpdate = async (req, res) => {

    try {

        const { name, pass, email } = req.body;

        const user = model.findOne({ email })
        if (!user) {
            res.send(400).send({
                message: "user not fount please register"
            })
        }

        if (pass && pass < 6) {
            res.status(500).send({
                success: false,
                message: "ass must be greate then 6"
            })
        }
        const hashedpass = pass ? hashpass(pass) : undefined


    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({
            success: true,
            message: "error in user update"
        })
    }

}


module.exports = { registerController, loginController, userUpdate };
