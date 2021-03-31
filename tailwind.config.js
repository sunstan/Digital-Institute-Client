module.exports = {
    purge: [
        './src/**/*.{js,jsx,ts,tsx}',
        './public/index.html'
    ],
    darkMode: false,
    theme: {
        extend: {
            minHeight: {
                'screen-2/3': 'calc((100vh / 3) * 2)',
                'screen-3/4': 'calc((100vh / 4) * 3)'
            },
            maxHeight: {
                'screen-1/2': 'calc(100vh / 2)'
            },
            fontFamily: {
                'sans': ['Sarabun', 'Helvetica', 'Arial', 'sans-serif'],
            },
            padding: {
                '2-px': '2px',
            },
            height: {
                '2-px': '2px',
                '120': '30rem',
                '144': '36rem'
            },
            colors: {
                orange: {
                    '50': '#FFF5EC',
                    '100': '#FEEBD8',
                    '200': '#FDD7B1',
                    '300': '#FEC48B',
                    '400': '#FDB064',
                    '500': '#FC9C3D',
                    '600': '#E47D31',
                    '700': '#CB5E25',
                    '800': '#B43F19',
                    '900': '#9B210D',
                },
                blue: {
                    '50': '#DCE4F7',
                    '100': '#C8D3EE',
                    '200': '#A1B1DC',
                    '300': '#798FCB',
                    '400': '#526DBA',
                    '500': '#2C4CA9',
                    '600': '#243E9A',
                    '700': '#1B2F8B',
                    '800': '#12207C',
                    '900': '#09116E',
                },
                gray: {
                    '50': '#FAFAFA',
                    '100': '#F5F5F5',
                    '200': '#E5E5E5',
                    '300': '#D4D4D4',
                    '400': '#A3A3A3',
                    '500': '#737373',
                    '600': '#525252',
                    '700': '#404040',
                    '800': '#262626',
                    '900': '#171717',
                    '950': '#0F0F0F',
                }
            }
        },
    },
    variants: {
        backgroundColor: ['responsive', 'hover', 'disabled'],
        scale: ['responsive', 'group-hover'],
        extend: {},
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
}
