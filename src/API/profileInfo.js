export default function profileInfo(resolve, reject) {
    const token = localStorage.getItem("accessToken");
    if (!token) return;

    fetch("https://gateway.scan-interfax.ru/api/v1/account/info", {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
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
        .catch((data) => {
            reject(data);
        });
}
