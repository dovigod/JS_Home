import app from './app';

const PORT = process.env.PORT;

const listeningChecker = () => {
	console.log(`✅ listening to PORT : ${PORT}`);
};

app.listen(PORT, listeningChecker);
