import { Technology } from './types.ts';

export const getTechnologyLogo = (technology: Technology) => {
    switch (technology) {
        case Technology.React:
            return '/react.webp';
        case Technology.Typescript:
            return '/ts.webp';
        case Technology.Node:
            return '/node.webp';
        case Technology.Jest:
            return '/jest.webp';
        case Technology.Git:
            return '/git.webp';
        case Technology.Linux:
            return '/tux.webp';
        case Technology.SQL:
            return '/sql.webp';
        case Technology.AWS:
            return '/aws.webp';
        case Technology.PHP:
            return '/php.webp';
        case Technology.Python:
            return '/python.webp';
        case Technology.Laravel:
            return '/laravel.webp';
        case Technology.PHPUnit:
            return '/phpunit.webp';
        case Technology.Docker:
            return '/docker.webp';
        case Technology.GoogleAppScript:
            return '/script.webp';
        case Technology.HTML:
            return '/html.webp';
        case Technology.GoogleSheets:
            return '/google-sheets.webp';
        case Technology.TensorFlow:
            return '/tensorflow.webp';
        case Technology.CSS:
            return '/css.webp';
        case Technology.JS:
            return '/js.webp';
        case Technology.Tailwind:
            return '/tailwind.webp';
        case Technology.Vim:
            return '/vim.webp';
        case Technology.Neovim:
            return '/neovim.webp';
        case Technology.CDK:
            return '/cdk.webp';
        case Technology.Bash:
            return '/bash.webp';
        default:
            return '/default-icon.webp';
    }
}
