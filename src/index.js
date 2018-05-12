import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';

//import schema from './graphql';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello graphql');
});

// Graphql API endpoint

app.use('graphql', graphqlHTTP(() =>({
    schema,
    graphiql: true,
    pretty: true
})))

app.listen(8080, () => {
    console.log('Graphql API running')
})