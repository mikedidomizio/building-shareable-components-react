export const Languages = ({ languages }: any) => {
  return <>
    {languages.map((language: any) => {
      return <span className="mr-2" key={language.name}>{language.name}</span>
    })}
  </>
};
