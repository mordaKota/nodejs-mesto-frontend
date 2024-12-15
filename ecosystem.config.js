require('dotenv').config({ path: '.env.deploy' });

const {
    DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF = 'origin/main',
} = process.env;

module.exports = {
    deploy: {
        production: {
            user: DEPLOY_USER,
            host: DEPLOY_HOST,
            ref: DEPLOY_REF,
            repo: 'git@github.com:mordaKota/nodejs-mesto-frontend.git',
            path: DEPLOY_PATH,
            'post-deploy': `npm install && npm build && ln -nfs ${DEPLOY_PATH}/source ${DEPLOY_PATH}/current`,
            env: {
                NODE_ENV: 'production',
            },
        },
    },
};