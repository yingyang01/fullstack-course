// TODO: 4. import connection
// import connect from '#app/repositories/mongo/connection';
// TODO: 7. import repo which didn't implemented yet.
// import useUserRepo from '#app/repositories/mongo/user';

export default ({ db }) => {
    // TODO: 8. create a connection
    // const connection = connect(db.mongo.uri);

    // TODO: 9. init user repo
    // const userRepo = useUserRepo(connection);

    return {
        userRepo,
    }
}