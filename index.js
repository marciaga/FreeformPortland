import App from './app/index';

const app = new App();

const start = async () => {
    await app.initialize();
}

start();
