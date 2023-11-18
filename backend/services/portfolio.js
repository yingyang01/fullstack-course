import { usePortfolioValidationSchema, useIdValidationSchema } from '#app/utils/validation';

export default ({ }) => {
    // TODO: 16. validation
    // const validateSchema = usePortfolioValidationSchema();
    // const idValidationSchema = useIdValidationSchema();

    // TODO: 17. sanitize to prevent addition fields
    // function sanitizePortfolio(portfolio) {
    //     return {
    //         cover: portfolio.cover,
    //         images: portfolio.images,
    //         title: portfolio.title,
    //         content: portfolio.content,
    //         skills: portfolio.skills,
    //         publishedAt: portfolio.publishedAt,
    //     }
    // }

    // TODO: 18. get portfolios
    // async function getPortfolios(page, limit) {
    //     let portfolios = [];

    //     const sanitizedPage = Math.max(page, 1);
    //     const sanitizedLimit = Math.min(limit, 10);
    //     const offset = (sanitizedPage - 1) * sanitizedLimit;

    //     return portfolios;
    // }

    // TODO: 19. get portfolio
    // async function getPortfolio(id) {
    //     const validatedId = await idValidationSchema.validate(id);

    //     return portfolio;
    // }

    // TODO: 20. create portfolio
    // async function createPortfolio(draftedPortfolio) {
    //     const validatedPortfolio = await validateSchema.validate(draftedPortfolio);

    //     const sanitizedPortfolio = sanitizePortfolio(validatedPortfolio);


    //     return portfolio;
    // }

    // TODO: 21. update portfolio
    // async function updatePortfolio(id, draftedPortfolio) {
    //     const validatedPortfolio = await validateSchema.validate(draftedPortfolio);
    //     const validatedId = await idValidationSchema.validate(id);

    //     const sanitizedPortfolio = sanitizePortfolio(validatedPortfolio);

    //     return portfolio;
    // }

    // TODO: 22. delete portfolio
    // async function deletePortfolio(id) {

    //     const validatedId = await idValidationSchema.validate(id);

    //     return result;
    // }

    // return {
    //     getPortfolios,
    //     getPortfolio,
    //     createPortfolio,
    //     updatePortfolio,
    //     deletePortfolio,
    // };
}