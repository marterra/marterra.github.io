let answer = prompt('Ключ?', '');
while (answer == '') {
    answer = prompt('Ключ?', '');
}

if (answer == '22.01.2019') {
    window.location.href = './pages/main.html';
} else {
    window.location.href = './pages/fool.html';
}