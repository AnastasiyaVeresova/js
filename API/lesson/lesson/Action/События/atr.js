const filterElementsByDataAttribute = (attributeName, maxPrice) => {
    const elements = Array.from(document.querySelectorAll(`[${attributeName}]`));
    elements.forEach(element => {
        const price = parseFloat(element.getAttribute(attributeName));
        if(price > maxPrice) {
            element.computedStyleMap.display = 'none';
        }
    });
};

filterElementsByDataAttribute('data-price', 50);