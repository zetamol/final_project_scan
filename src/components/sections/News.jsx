import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import DocItem from "./../elements/DocItem";

function News(props) {

    const [posts, setPosts] = useState(null);
    let postList;

    useEffect(() => {
        setPosts(props.posts);
    });

    if (posts === null) return;

    const postsStore = JSON.parse(localStorage.getItem('posts'));
    postList = postsStore.map((el, index) => {
        return <DocItem key={index} el={el.ok} />
    })
    
    return (
        <div className={"res__news " + (props.usePreloader ? 'hide' : "")}>
            <h2 className="res__news-sub-title sub-title">Список документов</h2>
            <div className="res__news-wrapper">
                {postList}
            </div>
        </div>
    )
}

export default connect(
    state => ({
        resSearch: state.resSearch
    }),
)(News);