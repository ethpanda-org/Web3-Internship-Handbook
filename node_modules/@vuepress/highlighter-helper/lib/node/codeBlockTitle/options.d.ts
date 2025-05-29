export type CodeBlockTitleRender = (title: string, code: string) => string;
export interface MarkdownItCodeBlockTitleOptions {
    /**
     * Whether to render the title of the code block
     *
     * - If `true`, enable the title render of the code block
     * - If `false`, disable the title render of the code block
     * - If `Function`, custom title render
     * @default true
     */
    codeBlockTitle?: CodeBlockTitleRender | boolean;
}
