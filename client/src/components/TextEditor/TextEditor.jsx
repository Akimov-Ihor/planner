/* eslint-disable */
import React, { useMemo, useState, useCallback,useEffect } from 'react';
import { createEditor, Transforms } from 'slate';

import { Slate, Editable, withReact } from 'slate-react';

import {TextEditorButtons} from "./TextEditorButtons/TextEditorButton";






export const TextEditor = ({ description }) => {
  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: `${description}` }],
    },
  ])

    useEffect(() => {
        if (!value ) {
            Transforms.deselect(editor);
        }
    }, [value])


  const renderElement = useCallback(props => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />
        case 'blockquote':
            return <BlockquoteElement {...props}/>
        case 'headingOne':
            return <HeaderOneElement {...props}/>
      default:
        return <DefaultElement {...props} />
    }
  }, [])

  const renderLeaf = useCallback(props => {
    return <Leaf {...props} />
  }, [])

  return (
      <Slate editor={editor} value={value} onChange={value => setValue(value)}>
        <TextEditorButtons editor={editor}/>
        <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
        />
      </Slate>
  )
}



const CodeElement = (props) => {
  return (
      <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
}
const BlockquoteElement = (props) => {
    return (
        <pre {...props.attributes}>
      <blockquote>{props.children}</blockquote>
    </pre>
    );
}
const HeaderOneElement = (props) => {
    return (
        <h1 {...props.attributes}>
      <span>{props.children}</span>
    </h1>
    );
}

const DefaultElement = (props) => {
  return <p {...props.attributes}>{props.children}</p>;
};

const Leaf = ({ attributes, children, leaf })=> {
    if (leaf.bold) {
        children = <strong>{children}</strong>
    }
    if (leaf.italic) {
        children = <em>{children}</em>
    }
    if (leaf.underline) {
        children = <u>{children}</u>
    }

    return <span {...attributes}>{children}</span>
}
