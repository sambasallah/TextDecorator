window.onload = () => {
    let buttonCtrl = document.getElementById("btn");
    let textBox = document.getElementById("textBox");
    buttonCtrl.onclick = () => {
       setInterval(styleTextBox,500);
    }

    const styleTextBox = () => {
        let fontSize = window.getComputedStyle(textBox, null).getPropertyValue('font-size');
        let newSize = parseFloat(fontSize) + 2; 
        textBox.style.fontSize = newSize + "pt";
    }

    let checkBoxCtrl = document.getElementById("bling");

    checkBoxCtrl.onchange = () => {
        if(checkBoxCtrl.checked) {
            textBox.style.fontWeight = "bold";
            textBox.style.color = "green";
            textBox.style.textDecoration = "underline";
        } else {
            textBox.style.fontWeight = null;
        }
    }
}
