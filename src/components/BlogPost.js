import { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { twilight as style } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import 'katex/dist/katex.min.css';

const BlogPost = ({ timestamp, source }) => {
    // Markdown is a string, taken from some .md file
    const [markdown, setMarkdown] = useState('');

    // Retrieve the contents of the desired file found at the path given by source
    useEffect(() => {
        fetch(source)
            .then((res) => res.text())
            .then((text) => setMarkdown(text));
    }, []);

    return (
        <div className="post">
            {timestamp ? <p className="timestamp">{timestamp}</p> : <></>}
            <Markdown 
                className="post-content"
                children={markdown}

                // Renders mathematical formulas written in Latex syntax
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}

                // Taken from the official react-markdown documentation
                // Applies syntax highlighting to any code block with a language associated with it
                components={{
                    code(props) {
                        const { children, className, node, ...rest } = props;
                        const match = /language-(\w+)/.exec(className || '');
                        return match ? (
                            <SyntaxHighlighter 
                                {...rest}
                                PreTag="div"
                                children={String(children).replace(/\n$/, '')}
                                language={match[1]}
                                style={style}
                            />
                        ) : (
                            <code {...rest} className={className}>
                                {children}
                            </code>
                        )
                    }
                }}
            />
        </div>
    )
};

export default BlogPost;