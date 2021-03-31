interface Props {
    readonly className?: string;
    readonly message: string;
}

const Error = ({message, className}: Props):JSX.Element =>
    <div className={'p-4 rounded border border-red-500 bg-red-50 text-red-500 text-sm text-center flex items-center justify-center ' + className}
         children={message}/>;

export default Error;