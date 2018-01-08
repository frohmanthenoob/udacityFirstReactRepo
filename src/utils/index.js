export function camelcaseToText(str) {
    const upCaseRegx = /\.?([A-Z])/g,
        camelCase = (all, letter) => {
            return " " + letter;
        },
        upCaseFirst = (text) => {
            return text.charAt(0).toUpperCase() + text.slice(1)
        };
    return upCaseFirst(str.replace(upCaseRegx, camelCase));
}

export function classedByProperty(arr, prop) {
    let tempText = [],
        classedObj = arr.reduce((accumulator, currentValue) => {
            if (tempText.includes(currentValue[prop])) {
                accumulator[currentValue[prop]].push(currentValue)
            } else {
                accumulator[currentValue[prop]] = [];
                accumulator[currentValue[prop]].push(currentValue);
                tempText.push(currentValue[prop])
            }
            return accumulator;
        }, {});
    return classedObj
}

export const SearchTerm = [
    'Android', 'Art', 'Artificial Intelligence',
    'Astronomy', 'Austen', 'Baseball',
    'Basketball', 'Bhagat', 'Biography',
    'Brief', 'Business', 'Camus',
    'Cervantes', 'Christie', 'Classics',
    'Comics', 'Cook', 'Cricket',
    'Cycling', 'Desai', 'Design',
    'Development', 'Digital Marketing', 'Drama',
    'Drawing', 'Dumas', 'Education',
    'Everything', 'Fantasy', 'Film',
    'Finance', 'First', 'Fitness',
    'Football', 'Future', 'Games',
    'Gandhi', 'Homer', 'Horror',
    'Hugo', 'Ibsen', 'Journey',
    'Kafka', 'King', 'Lahiri',
    'Larsson', 'Learn', 'Literary Fiction',
    'Make', 'Manage', 'Marquez',
    'Money', 'Mystery', 'Negotiate',
    'Painting', 'Philosophy', 'Photography',
    'Poetry', 'Production', 'Programming',
    'React', 'Redux', 'River',
    'Robotics', 'Rowling', 'Satire',
    'Science Fiction', 'Shakespeare',
    'Singh', 'Swimming', 'Tale',
    'Thrun', 'Time', 'Tolstoy',
    'Travel', 'Ultimate', 'Virtual Reality',
    'Web Development', 'iOS'
]

var BookAction;
(function (BookAction) {
    BookAction[BookAction["Get"] = 1] = "Get";
    BookAction[BookAction["GetAll"] = 2] = "GetAll";
    BookAction[BookAction["Update"] = 3] = "Update";
    BookAction[BookAction["Search"] = 4] = "Search";
})(BookAction || (BookAction = {}));

export const BookActions = BookAction