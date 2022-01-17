let bgColors = ["#AF7AC5", "#5499C7", "#45B39D", "#F4D03F", "#EB984E"],
    fontColors = ["#C39BD3", "#A9CCE3", "#A2D9CE", "#F9E79F", "#F0B27A"];

document.body.onclick = function () {
    let colorBg = bgColors.shift();
    let colorTxt = fontColors.shift();

    bgColors.push(colorBg);
    fontColors.push(colorTxt);

    document.body.style.backgroundColor = colorBg;
    document.getElementById("h1").style.color = colorTxt;
    document.getElementById("h2").style.color = colorTxt;
};