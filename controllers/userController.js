const ApiError = require('../error/ApiError')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { User, Rating } = require('../models')

const generateJwt = (id, email ) => {
    return jwt.sign({id, email }, 'secret_key', { expiresIn: '24h' })
}

class UserController {
    async registration(req, res, next) {
        const { email, password } = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest('Incorrect credentials'))
        }
        const candidate = await User.findOne({ where: { email } })
        if (candidate) {
            return next(ApiError.badRequest('This email is already taken'))
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({ email, password: hashPassword });
        const token = generateJwt(user.id, user.email)
        return res.json({ token });
    }

    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}});
        if (!user) {
            return next(ApiError.internal("Incorrect credentials"))
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.internal("Incorrect password"))
        }
        const token = generateJwt(user.id, user.email);
        return res.json({token});
    }

    async check(req, res, next) {
        const { id } = req.query;
        if (!id) {
            return next(ApiError.badRequest('Не задан'))
        }
        res.json(id)
    }
}

module.exports = new UserController();