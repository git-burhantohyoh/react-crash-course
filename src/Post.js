import React from 'react';
import PropTypes from 'prop-types';

function Post({ id, title }) {
    return (
        <div className="Post">
            <div className="Post__title">{title}</div>
            <img
                className="Post__image"
                src={`https://source.unsplash.com/random?sig=${id}`} 
                alt=""
            />
        </div>
    )
}

Post.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
};

export default Post;