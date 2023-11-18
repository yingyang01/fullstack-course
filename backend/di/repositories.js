import connect from '#app/repositories/mongo/connection';
import useUserRepo from '#app/repositories/mongo/user';
import useProfileRepo from '#app/repositories/mongo/profile';
// TODO: 3. import portfolio repo
// import usePortfolioRepo from '#app/repositories/mongo/portfolio';

export default ({ db }) => {
    const connection = connect(db.mongo.uri);

    const userRepo = useUserRepo(connection);
    const profileRepo = useProfileRepo(connection);
    // TODO: 4. init portfolio repo
    // const portfolioRepo = usePortfolioRepo(connection);

    return {
        userRepo,
        profileRepo,
        // TODO: 5. return
        // portfolioRepo,
    }
}