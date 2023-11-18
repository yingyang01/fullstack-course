import connect from '#app/repositories/mongo/connection';
import useUserRepo from '#app/repositories/mongo/user';
// TODO: 3. import repo that we want to implement
// import useProfileRepo from '#app/repositories/mongo/profile';

export default ({ db }) => {
    const connection = connect(db.mongo.uri);

    const userRepo = useUserRepo(connection);
    // TODO: 4. init profile repo
    // const profileRepo = useProfileRepo(connection);

    return {
        userRepo,
        // TODO: 5. return
        // profileRepo,
    }
}