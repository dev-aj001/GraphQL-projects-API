const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./schemes/taskSchema');
const resolvers = require('./resolvers/taskResolver');

const startConnection = async () => {
    await mongoose.connect('mongodb+srv://arjaibanezpa:C19400437@tasks.kooqk.mongodb.net/?retryWrites=true&w=majority&appName=TASKS');

    const server = new
    ApolloServer({ typeDefs, resolvers });

    server.listen().then(({url}) => {
        console.log(`Servidor corriendo en ${url}`);
    });
};

startConnection();
