import React from "react";

interface Props {
  code: number[];
}
/**
 * The code has to be hexadeciaml (eg: `[0x1f1ea, 0x1f1f8]` to show 🇪🇸), instead of `U+1F600`
 * Unicode emojis list is here: https://unicode.org/emoji/charts/full-emoji-list.htmlf
 */
const Emoji: React.FC<Props> = ({ code }) => {
  return <span role="img">{String.fromCodePoint(...code)}</span>;
};

export default Emoji;
