const shuffle = array => {
    const newArray = [...array];
    for(let i = newArray.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

const listElem = document.querySelector('#list');
const btn = document.querySelector('#btn');
const resultElem = document.querySelector('#result');

btn.addEventListener('click', () => {
    const list = listElem.value.split('\n');
    const newList = shuffle(shuffle(shuffle(list)));
    const randomIndex = Math.floor(Math.random() * list.length);

    console.log(newList, 'Перемешанный массив');
    console.log(randomIndex, 'Случайное число');

    const win = newList[randomIndex];

    resultElem.textContent = win;
})