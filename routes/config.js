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
    //TODO: this doesn't work to give the 
    //conf.env properly
    return conf.env || conf.work;
};