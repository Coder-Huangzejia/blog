
interface postChildren{
    title:string
    path:string
}
export interface DirectoryNode {
    group: string;   // 父级目录名（基于根目录的相对路径）
    children: postChildren[]; // 该目录下的md文件名集合（不含扩展名）
};
