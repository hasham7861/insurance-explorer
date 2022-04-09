interface IPageHeadingProps {
    title: string
}
export function PageHeading ({title}: IPageHeadingProps) {
    return <h1>{title}</h1>
}