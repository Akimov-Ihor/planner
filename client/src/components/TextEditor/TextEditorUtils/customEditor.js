import { Editor, Text, Transforms } from 'slate';
import { isEditorActive } from './isEditorActive';

export const customEditor = {

  toggleBoldMark(editor) {
    const isActive = isEditorActive.isBoldMarkActive(editor);
    Transforms.setNodes(
      editor,
      { bold: isActive ? null : true },
      { match: (n) => Text.isText(n), split: true },
    );
  },

  toggleCodeBlock(editor) {
    const isActive = isEditorActive.isCodeBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : 'code' },
      { match: (n) => Editor.isBlock(editor, n) },
    );
  },
  toggleBlockquoteBlock(editor) {
    const isActive = isEditorActive.isBlockquoteActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : 'blockquote' },
      { match: (n) => Editor.isBlock(editor, n) },
    );
  },
  toggleHeadingOneMark(editor) {
    const isActive = isEditorActive.isHeadingOneMarkActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : 'headingOne' },
      { match: (n) => Editor.isBlock(editor, n) },
    );
  },
  toggleListMark(editor) {
    const isActive = isEditorActive.isListMarkActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : 'list' },
      { match: (n) => Editor.isBlock(editor, n) },
    );
  },

  toggleItalicMark(editor) {
    const isActive = isEditorActive.isItalicMarkActive(editor);
    Transforms.setNodes(
      editor,
      { italic: isActive ? null : true },
      { match: (n) => Text.isText(n), split: true },
    );
  },
  toggleUnderlineMark(editor) {
    const isActive = isEditorActive.isUndelineMarkActive(editor);
    Transforms.setNodes(
      editor,
      { underline: isActive ? null : true },
      { match: (n) => Text.isText(n), split: true },
    );
  },

};
