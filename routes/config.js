var conf = {
    production:     {
        port:80
    },
    work:    {
        port:3000,
        pgConnect:"postgres://postgres:spatial@localhost:5433/leaflet"
    },
    home:        {
        port:3000,
        pgConnect:"postgres://postgres:spatial@localhost:5432/leaflet"
    }
};

exports.get = function get(env){
    return conf[env] || conf.work;
}