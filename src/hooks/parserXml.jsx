export default function parserXml(value) {
    let subRes = value.replace(/(<([^>]+)>)/ig, "");
    return subRes.replace(/['&lt;''br&gt;''br&gt;''/''="#666"'=""''aA-zZ]/g, "").slice(0, 300) + '...';
}

