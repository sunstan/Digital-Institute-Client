const dev = {
    host_api: 'http://localhost:1338'
}

const prod = {
    host_api: 'https://digital-institute-api.leaders-formation.fr'
}

export const environment = process.env.NODE_ENV === 'production'
    ? prod
    : dev;
