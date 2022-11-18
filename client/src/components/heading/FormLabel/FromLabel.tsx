interface Props {
  title: string;
}

function FormLabel({ title }: Props) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default FormLabel;
