import a from './component/A';
import blockquote from './component/Blockquote';
import br from './component/Br';
import em from './component/Em';
import h1 from './component/H1';
import h2 from './component/H2';
import hr from './component/Hr';
import li from './component/Li';
import ol from './component/Ol';
import p from './component/P';
import strong from './component/Strong';
import table from './component/Table';
import ul from './component/Ul';
const comp = {
    a,
    blockquote,
    br,
    em,
    h1,
    h2,
    hr,
    li,
    ol,
    p,
    strong,
    table,
    ul,
} as const;

export default comp;
