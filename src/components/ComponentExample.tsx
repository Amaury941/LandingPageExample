interface Props {
    name: string;
}
function ComponentExample ({name}: Props) {
    return <h1>{name}</h1>
}

export default ComponentExample;