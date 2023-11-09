import { usePortfolioValidationSchema, useIdValidationSchema } from '#app/utils/validation';

export default ({ portfolioRepo }) => {
    const validateSchema = usePortfolioValidationSchema();
    const idValidationSchema = useIdValidationSchema();

    function sanitizePortfolio(portfolio) {
        return {
            cover: portfolio.cover,
            images: portfolio.images,
            title: portfolio.title,
            content: portfolio.content,
            skills: portfolio.skills,
            publishedAt: portfolio.publishedAt,
        }
    }

    async function getPortfolios(page, limit) {
        let portfolios = [];

        try {
            const sanitizedPage = Math.min(page, 1);
            const sanitizedLimit = Math.min(limit, 10);
            const offset = (sanitizedPage - 1) * sanitizedLimit;

            portfolios = await portfolioRepo.getPortfolios(offset, sanitizedLimit);
        } catch (error) {
            throw new Error(error);
        }

        return portfolios;
    }

    async function getPortfolio(id) {
        let portfolio;

        try {
            portfolio = await portfolioRepo.getPortfolio(id);
        } catch (error) {
            throw new Error(error);
        }

        return portfolio;
    }

    async function createPortfolio(draftedPortfolio) {
        let portfolio;

        try {
            const validatedPortfolio = await validateSchema.validate(draftedPortfolio);

            const sanitizedPortfolio = sanitizePortfolio(validatedPortfolio);

            portfolio = await portfolioRepo.createPortfolio(sanitizedPortfolio);
        } catch (error) {
            throw new Error(error);
        }

        return portfolio;
    }

    async function updatePortfolio(id, draftedPortfolio) {
        let portfolio;

        try {
            const validatedPortfolio = await validateSchema.validate(draftedPortfolio);
            const validatedId = await idValidationSchema.validate(id);

            const sanitizedPortfolio = sanitizePortfolio(validatedPortfolio);

            portfolio = await portfolioRepo.updatePortfolio(validatedId, sanitizedPortfolio);
        } catch (error) {
            throw new Error(error);
        }

        return portfolio;
    }

    async function deletePortfolio(id) {
        let result;

        try {
            const validatedId = await idValidationSchema.validate(id);

            result = await portfolioRepo.deletePortfilio(validatedId);
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
        deletePortfolio,
    };
}