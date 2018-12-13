import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-my-burger-1234567.firebaseio.com/'
});

export default instance;