import { Schema } from 'mongoose';

export default (connection) => {
    const PortfolioModel = connection.model('Portfolio', new Schema({
        cover: String,
        images: [String],
        title: String,
        content: String,
        skills: [String],
        publishedAt: Date,
    }));

    async function getPortfolios(offset, limit) {
        let portfolios;

        try {
            portfolios = await PortfolioModel.where({}).skip(offset).limit(limit).find();
        } catch (error) {
            throw new Error(error);
        }

        return portfolios;
    }

    async function getPortfolio(id) {
        let portfolio;

        try {
            portfolio = await PortfolioModel.where({ _id: id }).findOne();
        } catch (error) {
            throw new Error(error);
        }

        return portfolio;
    }

    async function createPortfolio(draftedPortfolio) {
        let portfolio;

        try {
            portfolio = new PortfolioModel(draftedPortfolio);
            portfolio = await portfolio.save();
        } catch (error) {
            throw new Error(error);
        }

        return portfolio;
    }

    async function updatePortfolio(id, draftedPortfolio) {
        let portfolio;

        try {
            portfolio = await PortfolioModel.findOneAndUpdate({ _id: id }, {
                $set: draftedPortfolio,
            }, {
                new: true,
            });
        } catch (error) {
            console.log('error', error);
            throw new Error(error);
        }

        return portfolio;
    }

    async function deletePortfilio(id) {
        let result;

        try {
            result = await PortfolioModel.deleteOne({ _id: id });
        } catch (error) {
            throw new Error(error);
        }

        return result;
    }

    return {
        getPortfolios,
        getPortfolio,
        createPortfolio,
        updatePortfolio,
        deletePortfilio,
    };
}