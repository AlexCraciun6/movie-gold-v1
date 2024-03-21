import axios from 'axios';

// https://dashboard.ngrok.com/cloud-edge/domains/rd_2dzDEWxJLiOx7x9fGGyCDMoB63I/start-a-tunnel

export default axios.create({
    baseURL:'https://rooster-shining-oddly.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});