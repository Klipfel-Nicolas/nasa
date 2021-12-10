export  const rotateText = () => {
    const menuItem = [...document.querySelectorAll('.word-container')];
    
    menuItem.forEach(item => {
        let word = item.children[0].children[0].innerText.split(''); // Split le txe des span
        item.children[0].innerHTML = ''
        
        word.forEach((letter, index) => {
            item.children[0].innerHTML += `<span style="--index: ${index};">${letter}</span>`; //crée un span par lettre et donne l'index css
        })

        let cloneDiv = item.children[0].cloneNode(true);
        cloneDiv.style.position = 'absolute';
        cloneDiv.style.left = '0';
        cloneDiv.style.top = '0';
        item.appendChild(cloneDiv);
    })
}

