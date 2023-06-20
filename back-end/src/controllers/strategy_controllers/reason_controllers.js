let enterprice_sentence = {
    sentence: "ddd", 
    autor: "d"
};
let table = [
    shareholdershareholder = {
        pressure: 0,
        why: []
    },
    president ={ 
        pressure: 0,
        why: []
    },
    customer = {
        pressure: 0,
        why: []
    },
    competence = {
        pressure: 0,
        why: []
    },
    environment = {
        pressure: 0,
        why: []
    }
];


const updateSentence = (sentence, autor) => {
    enterprice_sentence.sentence = sentence;
    enterprice_sentence.autor = autor;

    return enterprice_sentence;
};

const postTable = ( position, pressure, why ) =>{
    table[position].pressure = pressure;
    if (table[position].why.length < 6){
        table[position].why.push(why);
    }

    return table; 
};

const deleteTable = (position) => {
    table[position].why.pop();
    return table;
}






module.exports = {
    updateSentence,
    postTable,
    deleteTable
}