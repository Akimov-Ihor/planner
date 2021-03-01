import { Editor } from 'slate';

export const isEditorActive = {
  isBoldMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.bold === true,
      universal: true,
    });

    return !!match;
  },
  isUndelineMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.underline === true,
      universal: true,
    });
    return !!match;
  },

  isCodeBlockActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === 'code',
    });

    return !!match;
  },

  isBlockquoteActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === 'blockquote',
    });
    return !!match;
  },
  isHeadingOneMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === 'headingOne',
    });
    return !!match;
  },

  isItalicMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.italic === true,
      universal: true,
    });
    return !!match;
  },
  isListMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === 'list',
    });
    return !!match;
  },
};
