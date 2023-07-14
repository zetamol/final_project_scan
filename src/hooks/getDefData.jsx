import histograms from '../API/histograms';

export default function getDefData() {

    let res = {
        histograms: null,
        objectSearch: null
    };

    const inputValues = JSON.parse(localStorage.getItem('inputValues'));
    const checkBoxValues = JSON.parse(localStorage.getItem('checkBoxValues'));

    res.histograms = new Promise((resolve, reject) => {
        histograms(true, inputValues, checkBoxValues, resolve, reject)
    });

    res.objectSearch = new Promise((resolve, reject) => {
        histograms(false, inputValues, checkBoxValues, resolve, reject)
    });

    return res;
}