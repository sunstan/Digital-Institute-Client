interface Props {
    readonly className?: string;
    readonly message: string;
}

const Success = ({message, className}: Props):JSX.Element =>
    <div className={'p-4 rounded border border-green-500 bg-green-50 text-green-500 text-sm text-center flex items-center justify-center ' + className}
         children={message}/>;

export default Success;