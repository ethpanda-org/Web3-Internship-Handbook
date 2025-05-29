import grayMatter from 'gray-matter';

const frontmatterPlugin = (md, { grayMatterOptions, renderExcerpt = true } = {}) => {
  const parse = md.parse.bind(md);
  md.parse = (src, env = {}) => {
    const { data, content, excerpt = "" } = grayMatter(src, grayMatterOptions);
    env.content = content;
    env.frontmatter = {
      // allow providing default value
      ...env.frontmatter,
      ...data
    };
    env.excerpt = renderExcerpt && excerpt ? (
      // render the excerpt with original markdown-it render method.
      // here we spread `env` to avoid mutating the original object.
      // using deep clone might be a safer choice.
      md.render(excerpt, { ...env })
    ) : (
      // use the raw excerpt directly
      excerpt
    );
    return parse(content, env);
  };
};

export { frontmatterPlugin };
