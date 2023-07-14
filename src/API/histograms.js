export default function histograms(histograms, objInputValues, objCheckBoxValues, resolve, reject) {
    const token = localStorage.getItem("accessToken");
    if (!token) return;

    let url = "https://gateway.scan-interfax.ru/api/v1/objectsearch/";

    if (histograms) url = url + "histograms";

    fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            intervalType: "month",
            histogramTypes: ["totalDocuments", "riskFactors"],
            sortType: "issueDate",
            limit: objInputValues.count,
            sortDirectionType: "asc",
            similarMode: "none",
            issueDateInterval: {
                startDate: objInputValues.dateStart,
                endDate: objInputValues.dateEnd,
            },
            attributeFilters: {
                excludeTechNews: true,
                excludeAnnouncements: true,
                excludeDigests: true,
            },
            searchContext: {
                targetSearchEntitiesContext: {
                    targetSearchEntities: [
                        {
                            type: "company",
                            sparkId: null,
                            entityId: null,
                            inn: objInputValues.inn,
                            maxFullness: objCheckBoxValues.maxFullness,
                            inBusinessNews: objCheckBoxValues.inBusinessNews,
                        },
                    ],
                    onlyMainRole: objCheckBoxValues.onlyMainRole,
                    tonality: objInputValues.ton,
                    onlyWithRiskFactors: false,
                },
            },
        }),
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