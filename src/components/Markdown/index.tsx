import {ghcolors} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {environment} from '../../core/environments/environment';
import ReactMarkdown from 'react-markdown';
import breaks from 'remark-breaks';
import gfm from 'remark-gfm';
import './style.scss';

interface Props {
    readonly markdown: string;
}

const Markdown = ({markdown}: Props): JSX.Element => {

    const renderers = {
        image: ({src}: any) => <img alt='' src={environment.host_api + src} className='w-full rounded'/>,
        code: ({language, value}: any) => <SyntaxHighlighter style={ghcolors} language={language} children={value}/>
    }

    return <div className='flex flex-col gap-6 border-t-2 border-orange-500 bg-white shadow p-6 lg:p-10 group rounded'>
        <div className='mx-auto max-w-3xl w-full'>
            <ReactMarkdown className='markdown' renderers={renderers} plugins={[gfm, breaks]} children={markdown} allowDangerousHtml/>
        </div>
    </div>;
};

export default Markdown;