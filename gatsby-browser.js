require('typeface-bangers');
require('typeface-patrick-hand-sc');
require('typeface-cardo');
require('typeface-montserrat-alternates');
require("./src/css/stylesheet.css");
// ES5 way
// exports.onClientEntry = () => {
// ES6 way
export const onClientEntry = () => {
    // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
    if (typeof window.IntersectionObserver === `undefined`) {
        import(`intersection-observer`)
        console.log(`# IntersectionObserver is polyfilled!`)
    }
}
export { default as wrapRootElement } from './src/state/ReduxWrapper';