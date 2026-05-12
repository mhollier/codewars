function solution(input, markers) {
    var inputLines = input.split('\n');
    var responseLines = [];
    inputLines.forEach(inputLine => {
        var commentIdx = inputLine.length;
        markers.forEach(marker => {
            var markerIdx = inputLine.indexOf(marker);
            commentIdx = markerIdx !== -1 && markerIdx < commentIdx ? markerIdx : commentIdx;
        });
        responseLines.push(inputLine.slice(0, commentIdx).trim());
    });
    return responseLines.join('\n');
};

var s1 = solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]);

console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"])); // "apples, plums\npears\noranges"
console.log(solution("Q @b\nu\ne -e f g", ["@", "-"])); // "Q\nu\ne"
