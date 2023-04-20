import apiRouter from './routes/api.routes.js';
export const applyRoutes = (app) => {
    console.log('Step 1');
    app.use('/api', apiRouter);
};

