let mix = require('laravel-mix');

class Tailwind {
    dependencies() {
        this.requiresReload = `
        Tailwind has now been installed.Please ensure that your tailwind.js 
        configuration file(node_modules / .bin / tailwind init) has been created 
        and then run npm run dev again.
        `;

        return ['tailwindcss'];
    }

    boot() {
        if (mix.components.has('sass')){
            Config.processCssUrls = false;
        }

        let tailwindcss = require('tailwindcss');

        Config.postCss.push(tailwindcss('./tailwind.config.js'));
    }
}

mix.extend('tailwind', new Tailwind());
