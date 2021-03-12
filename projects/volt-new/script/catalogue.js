// aside  price range

/*                                 Price Range                                */
/* -------------------------------------------------------------------------- */

const priceSlider = document.getElementById('price-range')
var nodes = [
    document.getElementById('range-low-price'),
    document.getElementById('range-high-price') 
];

noUiSlider.create(priceSlider, {
    start: [200, 1000],
    connect: true,
    range: {
        'min': 0,
        'max': 3000
    },
    step:10,
    tooltips: false,
    
    // remove decimals
    format: {
        to: (v) => parseFloat(v).toFixed(0),
        from: (v) => parseFloat(v).toFixed(0)
    }

});

priceSlider.noUiSlider.on('update', function (values, handle) {
    var value = values[handle];

    if (handle) {
        nodes[1].value = value;
    } else {
        nodes[0].value = value;
    }
});

nodes[0].addEventListener('change', function () {
    priceSlider.noUiSlider.set([this.value, null]);
});

nodes[1].addEventListener('change', function () {
    priceSlider.noUiSlider.set([null, this.value]);
});



// category


/*                               checkbox accordions                         */
/* -------------------------------------------------------------------------- */

// --- open selected modal with hero btns
$('.catalogue__accordion-tab').on('click', function(){
    // selected el index
    let index = $('.catalogue__accordion-tab').index(this);

    // togle accoerdion content and icon
    $('.catalogue__accordion-tab').eq(index).toggleClass('closed')
    $('.catalogue__accordion-content').eq(index).toggleClass('closed')
});







