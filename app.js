const simple_colors = [
    { name: 'Black', value: 'black', color: '#F00000' },
    { name: 'Silver', value: 'silver', color: '#c0c0c0' },
    { name: 'Gray', value: 'gray', color: '#808080' },
    { name: 'White', value: 'white', color: '#ffffff' },
    { name: 'Maroon', value: 'maroon', color: '#800000' },
    { name: 'Red', value: 'red', color: '#ff0000' },
    { name: 'Purple', value: 'purple', color: '#800080' },
    { name: 'Fuchsia', value: 'fuchsia', color: '#ff00ff' },
    { name: 'Green', value: 'green', color: '#008000' },
    { name: 'Lime', value: 'lime', color: '#00ff00' },
    { name: 'Olive', value: 'olive', color: '#808000' },
    { name: 'Yellow', value: 'yellow', color: '#ffff00' },
    { name: 'Navy', value: 'navy', color: '#000080' },
    { name: 'Blue', value: 'blue', color: '#0000ff' },
    { name: 'Teal', value: 'teal', color: '#008080' },
    { name: 'Aqua', value: 'aqua', color: '#00ffff' }
];

const complex_colors = [
    { name: 'Alice Blue', value: 'aliceblue', color: '#f0f8ff' },
    { name: 'Antique White', value: 'antiquewhite', color: '#faebd7' },
    { name: 'Aqua', value: 'aqua', color: '#00ffff' },
    { name: 'Aquamarine', value: 'Aquamarine', color: '#7fffd4' },
    { name: 'Azure', value: 'azure', color: '#f0ffff' },
    { name: 'Beige', value: 'beige', color: '#f5f5dc' },
    { name: 'Bisque', value: 'bisque', color: '#ffe4c4' },
    { name: 'Black', value: 'black', color: '#000000' },
    { name: 'Blanched Almond', value: 'blanchedalmond', color: '#ffebcd' },
    { name: 'Blue', value: 'blue', color: '#0000ff' },
    { name: 'Blue Violet', value: 'blueviolet', color: '#8a2be2' },
    { name: 'Brown', value: 'brown', color: '#a52a2a' },
    { name: 'Burly Wood', value: 'burlywood', color: '#deb887' },
    { name: 'Cadet Blue', value: 'cadetblue', color: '#5f9ea0' },
    { name: 'Chart Reuse', value: 'chartreuse', color: '#7fff00' },
    { name: 'Chocolate', value: 'chocolate', color: '#d2691e' },
    { name: 'Coral', value: 'coral', color: '#ff7f50' },
    { name: 'Corn Flower Blue', value: 'cornflowerblue', color: '#6495ed' },
    { name: 'Corn Silk', value: 'cornsilk', color: '#fff8dc' },
    { name: 'Crimson', value: 'crimson', color: '#dc143c' },
    { name: 'Cyan', value: 'cyan', color: '#00ffff' },
    { name: 'Dark Blue', value: 'darkblue', color: '#00008b' },
    { name: 'Dark Cyan', value: 'darkcyan', color: '#008b8b' },
    { name: 'Dark Golden Rod', value: 'darkgoldenrod', color: '#b8860b' },
    { name: 'Dark Gray', value: 'darkgray', color: '#a9a9a9' },
    { name: 'Dark Green', value: 'darkgreen', color: '#006400' },
    { name: 'Dark Grey', value: 'darkgrey', color: '#a9a9a9' },
    { name: 'Dark Khaki', value: 'darkkhaki', color: '#bdb76b' },
    { name: 'Dark Magenta', value: 'darkmagenta', color: '#8b008b' },
    { name: 'Dark Olive Green', value: 'darkolivegreen', color: '#556b2f' },
    { name: 'Dark Orange', value: 'darkorange', color: '#ff8c00' },
    { name: 'Dark Orchid', value: 'darkorchid', color: '#9932cc' },
    { name: 'Dark Red', value: 'darkred', color: '#8b0000' },
    { name: 'Dark Salmon', value: 'darksalmon', color: '#e9967a' },
    { name: 'Dark Sea Green', value: 'darkseagreen', color: '#8fbc8f' },
    { name: 'Dark Slate Blue', value: 'darkslateblue', color: '#483d8b' },
    { name: 'Dark Slate Gray', value: 'darkslategray', color: '#2f4f4f' },
    { name: 'Dark Turquoise', value: 'darkturquoise', color: '#00ced1' },
    { name: 'Dark Violet', value: 'darkviolet', color: '#9400d3' },
    { name: 'Deep Pink', value: 'deeppink', color: '#ff1493' },
    { name: 'Deep Sky Blue', value: 'deepskyblue', color: '#00bfff' },
    { name: 'Dim Gray', value: 'dimgray', color: '#696969' },
    { name: 'Dim Grey', value: 'dimgrey', color: '#696969' },
    { name: 'Dodger Blue', value: 'dodgerblue', color: '#1e90ff' },
    { name: 'Fire Brick', value: 'firebrick', color: '#b22222' },
    { name: 'Floral White', value: 'floralwhite', color: '#fffaf0' },
    { name: 'Forest Green', value: 'forestgreen', color: '#228b22' },
    { name: 'Fuchsia', value: 'fuchsia', color: '#ff00ff' },
    { name: 'Gainsboro', value: 'gainsboro', color: '#dcdcdc' },
    { name: 'Ghost White', value: 'ghostwhite', color: '#f8f8ff' },
    { name: 'Gold', value: 'gold', color: '#ffd700' },
    { name: 'Golden Rod', value: 'goldenrod', color: '#daa520' },
    { name: 'Gray', value: 'gray', color: '#808080' },
    { name: 'Green', value: 'green', color: '#008000' },
    { name: 'Green Yellow', value: 'greenyellow', color: '#adff2f' },
    { name: 'Honey Dew', value: 'honeydew', color: '#f0fff0' },
    { name: 'Hot Pink', value: 'hotpink', color: '#ff69b4' },
    { name: 'Indian Red', value: 'indianred', color: '#cd5c5c' },
    { name: 'Indigo', value: 'indigo', color: '#4b0082' },
    { name: 'Ivory', value: 'ivory', color: '#fffff0' },
    { name: 'Khaki', value: 'khaki', color: '#f0e68c' },
    { name: 'Lavender', value: 'lavender', color: '#e6e6fa' },
    { name: 'Lavender Blush', value: 'lavenderblush', color: '#fff0f5' },
    { name: 'Lawn Green', value: 'lawngreen', color: '#7cfc00' },
    { name: 'Lemon Chiffon', value: 'lemonchiffon', color: '#fffacd' },
    { name: 'Light Blue', value: 'lightblue', color: '#add8e6' },
    { name: 'Light Coral', value: 'lightcoral', color: '#f08080' },
    { name: 'Light Cyan', value: 'lightcyan', color: '#e0ffff' },
    { name: 'Light Golden Rod Yellow', value: 'lightgoldenrodyellow', color: '#fafad2' },
    { name: 'Light Gray', value: 'lightgray', color: '#d3d3d3' },
    { name: 'Light Green', value: 'lightgreen', color: '#90ee90' },
    { name: 'Light Grey', value: 'lightgrey', color: '#d3d3d3' },
    { name: 'Light Pink', value: 'lightpink', color: '#ffb6c1' },
    { name: 'Light Salmon', value: 'lightsalmon', color: '#ffa07a' },
    { name: 'Light Sea Green', value: 'lightseagreen', color: '#20b2aa' },
    { name: 'Light Sky Blue', value: 'lightskyblue', color: '#87cefa' },
    { name: 'Light Slate Gray', value: 'lightslategray', color: '#778899' },
    { name: 'Light Slate Grey', value: 'lightslategrey', color: '#778899' },
    { name: 'Light Steel Blue', value: 'lightsteelblue', color: '#b0c4de' },
    { name: 'Light Yellow', value: 'lightyellow', color: '#ffffe0' },
    { name: 'Lime', value: 'lime', color: '#00ff00' },
    { name: 'Lime Green', value: 'limegreen', color: '#32cd32' },
    { name: 'Linen', value: 'linen', color: '#faf0e6' },
    { name: 'Magenta', value: 'magenta', color: '#ff00ff' },
    { name: 'Maroon', value: 'maroon', color: '#800000' },
    { name: 'Medium Aquamarine', value: 'mediumaquamarine', color: '#66cdaa' },
    { name: 'Medium Blue', value: 'mediumblue', color: '#0000cd' },
    { name: 'Medium Orchid', value: 'mediumorchid', color: '#ba55d3' },
    { name: 'Medium Purple', value: 'mediumpurple', color: '#9370db' },
    { name: 'Medium Sea Green', value: 'mediumseagreen', color: '#3cb371' },
    { name: 'Medium Slate Blue', value: 'mediumslateblue', color: '#7b68ee' },
    { name: 'Medium Spring Green', value: 'mediumspringgreen', color: '#00fa9a' },
    { name: 'Medium Turquoise', value: 'mediumturquoise', color: '#48d1cc' },
    { name: 'Medium Violet Red', value: 'mediumvioletred', color: '#c71585' },
    { name: 'Midnight Blue', value: 'midnightblue', color: '#191970' },
    { name: 'Mint Cream', value: 'mintcream', color: '#f5fffa' },
    { name: 'Misty Rose', value: 'mistyrose', color: '#ffe4e1' },
    { name: 'Moccasin', value: 'moccasin', color: '#ffe4b5' },
    { name: 'Navajo White', value: 'navajowhite', color: '#ffdead' },
    { name: 'Navy', value: 'navy', color: '#000080' },
    { name: 'Old Lace', value: 'oldlace', color: '#fdf5e6' },
    { name: 'Olive', value: 'olive', color: '#808000' },
    { name: 'Olive Drab', value: 'olivedrab', color: '#6b8e23' },
    { name: 'Orange', value: 'orange', color: '#ffa500' },
    { name: 'Orange Red', value: 'orangered', color: '#ff4500' },
    { name: 'Orchid', value: 'orchid', color: '#da70d6' },
    { name: 'Pale Golden Rod', value: 'palegoldenrod', color: '#eee8aa' },
    { name: 'Pale Green', value: 'palegreen', color: '#98fb98' },
    { name: 'Pale Turquoise', value: 'paleturquoise', color: '#afeeee' },
    { name: 'Pale Violet Red', value: 'palevioletred', color: '#db7093' },
    { name: 'Papaya Whip', value: 'papayawhip', color: '#ffefd5' },
    { name: 'Peach Puff', value: 'peachpuff', color: '#ffdab9' },
    { name: 'Peru', value: 'peru', color: '#cd853f' },
    { name: 'Pink', value: 'pink', color: '#ffc0cb' },
    { name: 'Plum', value: 'plum', color: '#dda0dd' },
    { name: 'Powder Blue', value: 'powderblue', color: '#b0e0e6' },
    { name: 'Purple', value: 'purple', color: '#800080' },
    { name: 'Rebecca Purple', value: 'rebeccapurple', color: '#663399' },
    { name: 'Red', value: 'red', color: '#ff0000' },
    { name: 'Rosy Brown', value: 'rosybrown', color: '#bc8f8f' },
    { name: 'Royal Blue', value: 'royalblue', color: '#4169e1' },
    { name: 'Saddle Brown', value: 'saddlebrown', color: '#8b4513' },
    { name: 'Salmon', value: 'salmon', color: '#fa8072' },
    { name: 'Sandy Brown', value: 'sandybrown', color: '#f4a460' },
    { name: 'Sea Green', value: 'seagreen', color: '#2e8b57' },
    { name: 'Sea Shell', value: 'seashell', color: '#fff5ee' },
    { name: 'Sienna', value: 'sienna', color: '#a0522d' },
    { name: 'Silver', value: 'silver', color: '#c0c0c0' },
    { name: 'Sky Blue', value: 'skyblue', color: '#87ceeb' },
    { name: 'Slate Blue', value: 'slateblue', color: '#6a5acd' },
    { name: 'Slate Gray', value: 'slategray', color: '#708090' },
    { name: 'Slate Grey', value: 'slategrey', color: '#708090' },
    { name: 'Snow', value: 'snow', color: '#fffafa' },
    { name: 'Spring Green', value: 'springgreen', color: '#00ff7f' },
    { name: 'Steel Blue', value: 'steelblue', color: '#4682b4' },
    { name: 'Tan', value: 'tan', color: '#d2b48c' },
    { name: 'Teal', value: 'teal', color: '#008080' },
    { name: 'Thistle', value: 'thistle', color: '#d8bfd8' },
    { name: 'Tomato', value: 'tomato', color: '#ff6347' },
    { name: 'Turquoise', value: 'turquoise', color: '#40e0d0' },
    { name: 'Violet', value: 'violet', color: '#ee82ee' },
    { name: 'Wheat', value: 'wheat', color: '#f5deb3' },
    { name: 'White', value: 'white', color: '#ffffff' },
    { name: 'Whitesmoke', value: 'whitesmoke', color: '#f5f5f5' },
    { name: 'Yellow', value: 'yellow', color: '#ffff00' },
    { name: 'Yellow Green', value: 'yellowgreen', color: '#9acd32' },
];

const btn = document.getElementById('btn');
const color = document.getElementById('color');
const indicator = document.querySelector('.main-hex');
const color_simple = document.getElementById('color_simple');
const color_complex = document.getElementById('color_complex');
const color_standard = document.getElementById('color_standard');
const color_hex = document.getElementById('color_hex');
let color_indicator, name_indicator, selected_color, selected_hex, selected_standard;

// intialize setup 
color.textContent = 'White';
color_indicator = simple_colors;
selected_standard = true;
selected_hex = false;

const getRandomColor = (max, arr) => {
    let temp;
    temp = Math.floor(Math.random() * max);

    return arr[temp];
}

const getBrightness = (color) => {
    let hex_color = color.replace(/^#/, '');

    const r = parseInt(hex_color.slice(0, 2), 16);
    const g = parseInt(hex_color.slice(2, 4), 16);
    const b = parseInt(hex_color.slice(4, 6), 16);

    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness;
}

const getColor = (arr) => {
    let random_color = getRandomColor(arr.length, arr);
    const brightness = getBrightness(random_color.color);

    selected_color = random_color;

    const black = '#000';
    const white = '#fff';

    if(brightness < 128) {
        document.body.style.color = white;
        btn.style.border = `1px solid ${white}`;
        btn.style.color = white;
        indicator.style.backgroundColor = white;
        indicator.style.color = black;
        color_standard.style.borderColor = white;
        color_hex.style.borderColor = white;
        color_simple.style.borderColor = white;
        color_complex.style.borderColor = white;
    } else {
        document.body.style.color = black;
        btn.style.border = `1px solid ${black}`;
        btn.style.color = black;
        indicator.style.backgroundColor = black;
        indicator.style.color = white;
        color_standard.style.borderColor = black;
        color_hex.style.borderColor = black;
        color_simple.style.borderColor = black;
        color_complex.style.borderColor = black;
    }

    document.body.style.backgroundColor = random_color.value;

    if(selected_hex == true) {
        color.textContent = random_color.color;
    } else {
        color.textContent = random_color.name;
    }

    color.style.color = random_color.value;

    return selected_color;
}

btn.addEventListener('click', () => {
    getColor(color_indicator);
});

color_simple.addEventListener('click', () => {
    color_indicator = simple_colors;
    getColor(color_indicator);

    color_simple.classList.add('selected_indicator');
    color_complex.classList.remove('selected_indicator');
});

color_complex.addEventListener('click', () => {
    color_indicator = complex_colors;
    getColor(color_indicator);

    color_simple.classList.remove('selected_indicator');
    color_complex.classList.add('selected_indicator');

});

color_hex.addEventListener('click', () => {
    selected_standard = false;
    selected_hex = true;

    color_standard.classList.remove('selected_indicator');
    color_hex.classList.add('selected_indicator');
    color.textContent = selected_color.color;
});

color_standard.addEventListener('click', () => {
    selected_standard = true;
    selected_hex = false;

    color_standard.classList.add('selected_indicator');
    color_hex.classList.remove('selected_indicator');
    color.textContent = selected_color.name;
});


// intialize setup
let initial_color = getColor(simple_colors);
color_standard.classList.add('selected_indicator');
color_simple.classList.add('selected_indicator');
