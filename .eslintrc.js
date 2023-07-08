module.exports = {
    plugins: ['prettier'],
    extends: ['next/core-web-vitals'],
    rules: {
        'no-console': 'error',
        'prettier/prettier': [
            'warn',
            {
                tabWidth: 4,
            },
        ],
        'react-hooks/exhaustive-deps': 'off',
    },
};
