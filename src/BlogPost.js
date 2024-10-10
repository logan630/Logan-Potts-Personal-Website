import { useState, useEffect } from 'react';
import Markdown from 'react-markdown';

const BlogPost = ({ timestamp, source }) => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch(source)
            .then((res) => res.text())
            .then((text) => setMarkdown(text));
    }, []);

    return (
        <div className="post">
            <p className="timestamp">{timestamp}</p>
            <Markdown className="post-content">{markdown}</Markdown>
        </div>
    )
};

export default BlogPost;