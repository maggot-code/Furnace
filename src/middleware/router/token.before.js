export function define(to, form, next) {
    console.log(to, form);
    next();
}

export default (router) => router.beforeEach(define);
