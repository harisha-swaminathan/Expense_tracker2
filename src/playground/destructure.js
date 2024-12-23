const book = {
    title: 'Kim Ji Young, Born 1982',
    author: 'Cho Nam-Joo',
    publisher: {
        name: 'Audible'
    }
};

const {name: publisherName = 'Self-published'} = book.publisher;
console.log(publisherName);

const items = ['Coffee (hot)', '2.98', '3.45', '4.22'];

const [item, , medium] = items;

console.log(`A medium ${item} costs ${medium}`)