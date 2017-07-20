import LazyInvoke from './../src/LazyInvoke';

const loader = function () {
    this.loaderResult = Promise.all([import('noty'), import('./../plugins/noty/noty.less')]);
};

let invoke = async function (text, params) {
    let module = await this.getRealModule();
    const Noty = module[0];
    const options = Object.assign({}, this.options, params, {text});

    let noty = new Noty(options);
    noty.show();

    return noty;
};

export default {
    install: function(Vue, opts) {
        Vue.prototype.$notification = new LazyInvoke(loader, invoke, opts);
    }
};
