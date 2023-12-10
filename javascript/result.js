
    document.addEventListener('DOMContentLoaded', function() {
        var storedElementCounts = localStorage.getItem('elementCounts');
        console.log(storedElementCounts);
        if (storedElementCounts) 
        {
            var elementCounts = JSON.parse(storedElementCounts);
    
            //console.log(elementCounts);
            
            var maxCount = Math.max(...Object.values(elementCounts));
            var dominantElements = Object.keys(elementCounts).filter(element => elementCounts[element] === maxCount);
            
            var resultDiv = document.getElementById('quiz_result');
            //console.log(resultDiv);
            if (dominantElements.length === 1) 
            {
                var dominantElement = dominantElements[0];
                var dominantElementImage = getElementImage(dominantElement);
                resultDiv.innerHTML = '<p>Your dominant element is: ' + dominantElement + '</p>';
                resultDiv.innerHTML += '<img src="' + dominantElementImage + '" alt="' + dominantElement + '">';
            } 
            else 
            {
                resultDiv.innerHTML = '<p>Your dominant element is: Mixed</p>';
                resultDiv.innerHTML += '<p>Equally dominant elements:</p>';
                for (var element of dominantElements) {
                    var elementImage = getElementImage(element);
                    resultDiv.innerHTML += '<img src="' + elementImage + '" alt="' + element + '">';
                }
            }

            resultDiv.innerHTML += '<p>Element counts:</p>';
            for (var element in elementCounts) 
            {
                resultDiv.innerHTML += '<p>' + element + ': ' + elementCounts[element] + '</p>';
            }


        } 
        else 
        {
            console.log('No data found');
        }
        
        function getElementImage(element) {
            var elementImages = {
                Pyro: './assets/image/Pyro.png',
                Electro: './assets/image/Electro.png',
                Hydro: './assets/image/Hydro.png',
                Cryo: './assets/image/Cryo.png',
                Anemo: './assets/image/Anemo.png',
                Geo: './assets/image/Geo.png',
                Dendro: './assets/image/Dendro.png'
            };
    
            return elementImages[element];
        }
        
        localStorage.removeItem('elementCounts');
    });


