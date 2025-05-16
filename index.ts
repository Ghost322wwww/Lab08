import Koa from 'koa';
import Router from '@koa/router';
import serve from 'koa-static';
import bodyParser from 'koa-bodyparser';
import articleRoutes from './routes/articles';

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(serve('./docs')); // Redoc 會用到
app.use(articleRoutes.routes()).use(articleRoutes.allowedMethods());

const PORT = 10888;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
