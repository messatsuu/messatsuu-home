/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./assets/**/*.js",
        "./templates/**/*.html.twig",
        "./templates/**/*.js.twig",
        // tailwind form theme path
        "vendor/symfony/twig-bridge/Resources/views/Form/tailwind_2_layout.html.twig",
    ],
    // max-width class gets added dynamically in FormTypeExtension, so we need to safelist it
    safelist: [
        'max-w-xs',
        'max-w-sm',
        'max-w-md',
        'max-w-lg',
        'mb-2'
    ],
    theme: {
        fontFamily: {
            'sans': ['Inter', 'sans-serif'],
            'body': ['JetBrains Mono', 'monospace'],
        },
        extend: {
            colors: {
                "cherry": "#ca054d",
            }
        },
    },
    plugins: [],
}
