import documents from "../API/documents";

export default function getPostsInit(data, status) {
    let idsArr = [];


    if (status === 'newPost') {
        idsArr = data;
    } else {
        data.items.forEach(element => {
            idsArr.push(element.encodedId);
        });
    }

    if (idsArr.length >= 11) {
        localStorage.setItem('idsHide', JSON.stringify(idsArr.splice(10, (idsArr.length - 10))))
    } else {
        localStorage.setItem('idsHide', JSON.stringify(null));
    }

    return new Promise((resolve, reject) => {
        documents(idsArr, resolve, reject);
    })
}