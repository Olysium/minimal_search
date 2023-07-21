const toml = require('toml');

function create(search_text) {
    const data = {text: search_text};
    const toml_str = toml.stringify(data);

    console.log(toml_str);
}

const search_text = document.getElementsByClassName('search-box')[0].value;

create(search_text);