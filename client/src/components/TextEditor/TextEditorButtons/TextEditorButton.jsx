import React from 'react';
import { Icon } from 'semantic-ui-react';
import { customEditor } from '../TextEditorUtils/customEditor';

import './TextEditorButton.css';

export const TextEditorButtons = ({ editor }) => {
  return (
    <div className="editorButtonWrapper">
      <button type="button">
        <Icon
          name="bold"
          onClick={(event) => {
            event.preventDefault();
            customEditor.toggleBoldMark(editor);
          }}
        />
      </button>

      <button type="button">
        <Icon
          name="paragraph"
          onClick={(event) => {
            event.preventDefault();
            customEditor.toggleCodeBlock(editor);
          }}
        />
      </button>
      <button type="button">
        <Icon
          name="underline"
          onClick={(event) => {
            event.preventDefault();
            customEditor.toggleUnderlineMark(editor);
          }}
        />
      </button>
      <button type="button">
        <Icon
          name="quote right"
          onClick={(event) => {
            event.preventDefault();
            customEditor.toggleBlockquoteBlock(editor);
          }}
        />
      </button>
      <button type="button">
        <Icon
          name="italic"
          onClick={(event) => {
            event.preventDefault();
            customEditor.toggleItalicMark(editor);
          }}
        />
      </button>
      <button type="button">
        <Icon
          name="header"
          onClick={(event) => {
            event.preventDefault();
            customEditor.toggleHeadingOneMark(editor);
          }}
        />
      </button>
      <button type="button">
        <Icon
          name="list"
          onClick={(event) => {
            event.preventDefault();
            customEditor.toggleListMark(editor);
          }}
        />
      </button>
    </div>

  );
};
