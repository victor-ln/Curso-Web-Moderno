/**
 * Middleware is a layer of software that enables interaction and transmission 
 * of information between assorted applications and services that make up a 
 * complex system.
 */

const step1 = (context, next) => {
    context.value1 = 'mid1';
    next();
}

const step2 = (context, next) => {
    context.value2 = 'mid2';
    next();
}

const step3 = (context) => {
    context.value3 = 'mid3';
}

const exec = (context, ...steps) => {
    if (!steps) return
    const execStep = idx => {
        idx < steps.length && steps[idx](context, _ => execStep(idx + 1))
    }
    execStep(0);
}

const context = {};

exec(context, step2, step3);
console.log(context);
