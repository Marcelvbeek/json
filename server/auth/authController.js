const jwt = require('jsonwebtoken')
import config from '../database/config'
import models from '../database/index'
import passEncrypter from './passwordEncrypter'

const passwordEncrypter = new passEncrypter()

function getToken(req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    } 
    else if (req.query && req.query.token) {
        return req.query.token;
    }
    else if(req.body && req.body.token) {
        return req.body.token;
    }
    else if(req.headers['x-access-token']) {
        return req.headers['x-access-token']
    }
    return null;
}

class authController {
    constructor() {

    }

    

    addAcount(req, res) {
        models.userModel.find({'username': req.body.username}, (err, users) => {
            if(users && users.length) {
                res.json({
                    'error': 'User with username ' + req.body.username + ' found'
                })
            }
            else {
                if(req.body.username && req.body.password && req.body.name) {
                    const newUser = new models.userModel({
                        name: req.body.name, 
                        username: req.body.username,
                        password: passwordEncrypter.encrypt(req.body.password), 
                        role: 1
                    })
                    newUser.save()

                    // if user is found and password is right
                    // create a token
                    var token = jwt.sign(
                        {
                            data: newUser
                        }, 
                        config.secret, 
                        { 
                            expiresIn: 60 * 60 
                        }
                    );

                    // return the information including token as JSON
                    res.json({
                        success: true,
                        message: 'Enjoy your token!',
                        token: token
                    });
                }
                else {
                    res.json({
                        'error': 'Check if everything is filled correctly'
                    })
                }
            }
        })
    }

    verifyToken(req, res, next) {

        const token = getToken(req)

        // decode token
        if (token) {

            jwt.verify(
                token, 
                config.secret, 
            (err, decoded) => {      
                if (err) {
                    return res.json({ success: false, message: 'Failed to authenticate token.' });    
                } 
                else {
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;    
                    next();
                }
            });

        } else {

            // if there is no token
            // return an error
            return res.status(403).send({ 
                success: false, 
                message: 'No token provided.' 
            });

        }
    }

    login(req, res) {
        models.userModel.findOne({
            username: req.body.username
        }, 
        (err, user) => {

            if (err) throw err;

            if (!user) {
                res.json({ success: false, message: 'Authentication failed. User not found.' });
            } 
            else if (user) {

                // check if password matches
                if (!passwordEncrypter.compare(req.body.password, user.password)) {
                    res.json({ success: false, message: 'Authentication failed. Wrong password.' });
                } 
                else {

                    // if user is found and password is right
                    // create a token
                    var token = jwt.sign(
                        {
                            data: user
                        }, 
                        config.secret, 
                        { 
                            expiresIn: 60 * 60 
                        }
                    );

                    // return the information including token as JSON
                    res.json({
                        success: true,
                        message: 'Enjoy your token!',
                        token: token
                    });
                }   

                }

        });
    }
    
}

export default authController