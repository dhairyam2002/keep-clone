import app  from './app';
import {connectToDatabase} from './config/database';



app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

connectToDatabase();