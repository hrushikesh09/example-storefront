const nextRoutes = require('next-routes');
const routes = module.exports = nextRoutes();

const APP_ROUTES = [{
    page: 'landing',
    pattern: '/landing',
    name: 'landing'
}, {
    page: 'learn',
    pattern: '/learn',
    name: 'learn'
}, {
    page: 'review',
    pattern: '/review',
    name: 'review'
}, {
    page: 'our-offering',
    pattern: '/offerings',
    name: 'our-offering'
}, {
    page: 'booking',
    pattern: '/booking/:tab?',
    name: 'booking'
}, {
    page: 'consultation',
    pattern: '/consultation/:tab?',
    name: 'consultation'
}, {
    page: 'about',
    pattern: '/about',
    name: 'about'
}, {
    page: 'contact',
    pattern: '/contact',
    name: 'contact'
}
];

APP_ROUTES.forEach(route => routes.add(route));
