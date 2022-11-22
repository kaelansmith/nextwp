/* DEVELOPMENT:
*   While testing locally, uncomment the below line and specify the absolute path to the next-wp config file of the project you're testing with via npm link
*/
// import blockConfig from 'C:/Users/Kaelan Smith/Documents/Stikky Media/Lionheart Coaching/website-2/tailwindui-pocket/next-wp.config.js';

/* FOR PRODUCTION:
*   In production, we grab the next-wp config using a relative path, which assumes the user's node_modules folder is at the root level, and next-wp.config is also at the root level.. can improve this later to work in edge-case scenarios
*/
// import blockConfig from '../../../../next-wp.config.js'; // ES6 version
const blockConfig = require('../../../../next-wp.config.js'); // CommonJS version

// * Below, I tried dynamically using the imported config based on whether NODE_ENV == production or development.. but a "Module not found" error will always occur for one of the above imports, so I'm abandoning this for now and just manually commenting out the development/testing import 
// const config = {
//     development: devBlockConfig,
//     production: blockConfig`
// }[process.NODE_ENV]

export async function useGlobalConfig() {
    if(!blockConfig) throw Error("You're missing a blockConfig object in your root-level next-wp.config.js file.")
    return blockConfig
}