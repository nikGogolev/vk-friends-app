// eslint-disable-next-line no-unused-vars
const LOCAL_URL = "http://localhost:8080";
// eslint-disable-next-line no-unused-vars
const REMOTE_URL = "https://nikgogolev.github.io/vk-friends-app";

export const AUTH_URL = `https://oauth.vk.com/authorize?client_id=8228596&display=page&redirect_uri=${REMOTE_URL}&scope=friends,photos,status,offline,groups,email&response_type=token&v=5.131&state=123456`;

export const VK_URL = "https://api.vk.com/method";

export const PROXY_URL = "http://localhost:8010/proxy/method";

export const MIN_BRIGHTNESS = 50;
export const MAX_BRIGHTNESS = 150;
