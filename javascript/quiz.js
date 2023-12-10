document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('elementQuizForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Checks submission

        for (var i = 1; i <= 13; i++) {
            var selectedElements = document.querySelectorAll('input[name="q' + i + '"]:checked');
            if (selectedElements.length === 0) {
                alert('Please answer all questions to view your results!');
                return;
            }
        }

        processForm();
    });

    function processForm() {
        var elementCounts = {
            Pyro: 0,
            Electro: 0,
            Hydro: 0,
            Cryo: 0,
            Anemo: 0,
            Geo: 0,
            Dendro: 0
        };

        for (var i = 1; i <= 13; i++) {
            var selectedElement = document.querySelector('input[name="q' + i + '"]:checked');
            elementCounts[selectedElement.value]++;
        }
        localStorage.setItem('elementCounts', JSON.stringify(elementCounts));
        // var maxCount = Math.max(...Object.values(elementCounts));
        // var dominantElements = Object.keys(elementCounts).filter(element => elementCounts[element] === maxCount);
        
        // window.location.href = 'Element_Description.html';
        // var resultDiv = document.getElementById('quizResult');
        // console.log(resultDiv);
        // if (dominantElements.length === 1) {
        //     var dominantElement = dominantElements[0];
        //     var dominantElementImage = getElementImage(dominantElement);
        //     resultDiv.innerHTML = '<p>Your dominant element is: ' + dominantElement + '</p>';
        //     resultDiv.innerHTML += '<img src="' + dominantElementImage + '" alt="' + dominantElement + '">';
        // } else {
        //     resultDiv.innerHTML = '<p>Your dominant element is: Mixed</p>';
        //     resultDiv.innerHTML += '<p>Symbols of equally dominant elements:</p>';
        //     for (var element of dominantElements) {
        //         var elementImage = getElementImage(element);
        //         resultDiv.innerHTML += '<img src="' + elementImage + '" alt="' + element + '">';
        //     }
        // }

        // resultDiv.innerHTML += '<p>Element counts:</p>';
        // for (var element in elementCounts) {
        //     resultDiv.innerHTML += '<p>' + element + ': ' + elementCounts[element] + '</p>';
        // }
    }

    // function getElementImage(element) {
    //     var elementImages = {
    //         Pyro: './assets/image/Pyro.png',
    //         Electro: './assets/image/Electro.png',
    //         Hydro: './assets/image/Hydro.png',
    //         Cryo: './assets/image/Cryo.png',
    //         Anemo: './assets/image/Anemo.png',
    //         Geo: './assets/image/Geo.png',
    //         Dendro: './assets/image/Dendro.png'
    //     };

    //     return elementImages[element];
    // }
});