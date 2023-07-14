import React from "react";

import parserXml from "./../../hooks/parserXml";
import declOfNum from "./../../hooks/declOfNum";

export default function DocItem(props) {
    const el = props.el;

    return (
        <div className="res__news-item n-item">

            <div className="n-item__info">
                <div className="n-item__date">{el.issueDate.slice(0, 10)}</div>
                <a href={el.url} target="_blank" className="n-item__source">{el.source.name}</a>
            </div>

            <div className="n-item__title">{el.title.text}</div>

            <div className={"n-item__cat n-item__cat--techno " + (el.attributes.isTechNews ? '' : 'hide')}>технические новости</div>
            <div className={"n-item__cat n-item__cat--announcement " + (el.attributes.isTechNews ? '' : 'hide')}>анонсы и события</div>
            <div className={"n-item__cat n-item__cat--digest " + (el.attributes.isTechNews ? '' : 'hide')}>сводки новостей</div>

            <div className="n-item__desc">
                {parserXml(el.content.markup)}
            </div>
            <div className="n-item__align">
                <a href={el.url} target="_blank" className="n-item__btn">Читать в источнике</a>
                <div className="n-item__more">{el.attributes.wordCount} {declOfNum(el.attributes.wordCount, ['слово', 'слова', 'слов'])}</div>
            </div>
        </div>
    )
}