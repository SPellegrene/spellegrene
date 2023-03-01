import CodeSnippet from './code-snippet'
import markdownStyles from './markdown-styles.module.css'

type Props = {
  title: string,
  content: string,
  codeSnippet: string
}

const PostBody = ({ content, codeSnippet, title }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
        <CodeSnippet title={title} src={codeSnippet} />
    </div>
  )
}

export default PostBody
