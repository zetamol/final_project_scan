export default function documents(ids, resolve, reject) {
    const token = localStorage.getItem("accessToken");
    
    if (!token) return;
    let url = "https://gateway.scan-interfax.ru/api/v1/documents";
    
    fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            "ids": ids,
        })
    })
        .then((res) => {
            if (res.status >= 200 && res.status < 300) {
                return res;
            } else {
                let error = new Error(res.statusText);
                error.response = res;
                throw error;
            }
        })
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            resolve(data);
        })
        .catch((e) => {
            reject("Error: " + e.message);
        });
}
