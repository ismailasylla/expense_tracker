interface Props {
  title: string;
}

function MainHeading({ title }: Props) {
  return (
    <div>
      <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">
        {title}
      </h1>
    </div>
  );
}

export default MainHeading;
