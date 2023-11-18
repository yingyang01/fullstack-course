import { usePortfolioValidationSchema, useIdValidationSchema } from '#app/utils/validation';

export default ({
    // TODO: 8. get from outside
    // portfolioRepo
}) => {
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

        const sanitizedPage = Math.max(page, 1);
        const sanitizedLimit = Math.min(limit, 10);
        const offset = (sanitizedPage - 1) * sanitizedLimit;

        // TODO: 9. use repo
        // portfolios = await portfolioRepo.getPortfolios(offset, sanitizedLimit);

        return portfolios;
    }

    async function getPortfolio(id) {
        const validatedId = await idValidationSchema.validate(id);
        // TODO: 10. use repo
        // const portfolio = await portfolioRepo.getPortfolio(validatedId);

        return portfolio;
    }

    async function createPortfolio(draftedPortfolio) {
        const validatedPortfolio = await validateSchema.validate(draftedPortfolio);

        const sanitizedPortfolio = sanitizePortfolio(validatedPortfolio);

        // TODO: 11. use repo
        // const portfolio = await portfolioRepo.createPortfolio(sanitizedPortfolio);

        return portfolio;
    }

    async function updatePortfolio(id, draftedPortfolio) {
        const validatedPortfolio = await validateSchema.validate(draftedPortfolio);
        const validatedId = await idValidationSchema.validate(id);

        const sanitizedPortfolio = sanitizePortfolio(validatedPortfolio);

        // TODO: 12. use repo
        // const portfolio = await portfolioRepo.updatePortfolio(validatedId, sanitizedPortfolio);

        return portfolio;
    }

    async function deletePortfolio(id) {

        const validatedId = await idValidationSchema.validate(id);

        // TODO: 13. use repo
        // const result = await portfolioRepo.deletePortfilio(validatedId);

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