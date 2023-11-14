export default function SelectCity({
  children,
  selectedValue = "DEFAULT",
  onChange,
}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-lg my-2">Escolha o Município</h2>
      <div className="my-2">
        <select
          value={selectedValue}
          onChange={(e) => onChange(e.target.value)}
          className="border p-1"
        >
          <option disabled value="DEFAULT">
            Selecione uma Cidade
          </option>
          {children.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
