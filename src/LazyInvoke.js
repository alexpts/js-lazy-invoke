let LazyInvoke = function (loader, factory, options) {
    this.options = options;
    this.loaderResult = undefined;

    /**
     * @returns {Promise}
     */
    this.getRealModule = () => {
        this.getRealModule = () => this.loaderResult;
        loader.call(this);
        return this.loaderResult;
    };

    return factory.bind(this);
};

export default LazyInvoke;