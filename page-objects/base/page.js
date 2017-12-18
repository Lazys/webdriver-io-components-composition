class Page {

    navigate(path) {
        browser.url('/' + path);
    }

    getWSA() { return 'asd'; }
    

}

module.exports = Page;