import { Technology } from './types.ts';

export const getTechnologyLogo = (technology: Technology) => {
    console.log(technology);
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
        default:
            return '/default-icon.webp';
    }
}
