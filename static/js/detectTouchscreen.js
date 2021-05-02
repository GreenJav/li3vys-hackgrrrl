if ("ontouchstart" in document.documentElement)
{
    var all = document.getElementsByClassName('destaque-trabalho');
    for (var i = 0; i < all.length; i++) {
        all[i].style.backgroundColor = '#9557E69D';
        all[i].style.opacity = '1';
        all[i].style.fontSize = '10px';
}
}
