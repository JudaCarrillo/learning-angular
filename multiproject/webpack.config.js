import tailwindcss from 'tailwindcss';

export const module = {
    rules: [
        {
            test: /\.css$/,
            loader: 'postcss-loader',
            options: {
                postcssOptions: {
                    ident: 'postcss',
                    plugins: [
                        tailwindcss('./tailwind.config.js'),
                        require('autoprefixer'),
                    ],
                },
            },
        },
    ],
};
