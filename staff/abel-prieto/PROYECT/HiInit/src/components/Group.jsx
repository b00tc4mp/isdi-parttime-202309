
export default function Group(props) {
    const group = props.group

    return <>
        <article key={group._id}>
            <p>{group.name}</p>
        </article>
    </>
}