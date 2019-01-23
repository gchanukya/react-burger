import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-eccb6.firebaseio.com/'
});

export default instance;