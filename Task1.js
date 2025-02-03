ctx.prototype.__applyStyleState = (styleState) => this.__updateProperties(styleState);
ctx.prototype.__setDefaultStyles = () => this.__updateProperties(STYLES, 'canvas');
ctx.prototype.__getStyleState = () => this.__extractProperties(STYLES);

ctx.prototype.__updateProperties = (source, subKey) => Object.keys(source)
    .forEach(key => {
        this[key] = subKey ? source[key][subKey] : source[key];
    });

ctx.prototype.__extractProperties = (source) => Object.keys(source)
    .reduce((acc, key) => {
        acc[key] = this[key];
        return acc;
    }, {});