export default function Board({ children = <p>Conteúdo de Board</p> }) {
  return <div className=" border rounded-md p-2 m-2">{children}</div>;
}
