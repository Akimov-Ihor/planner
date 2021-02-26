import { Icon } from 'semantic-ui-react';
import React from 'react';
import { customEditor } from '../editorUtils/customEditor';

export const TextEditorButtons = ({ editor }) => {
  return (
    <div>
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
    </div>

  );
};
