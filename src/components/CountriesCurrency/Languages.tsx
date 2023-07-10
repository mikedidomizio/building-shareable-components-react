export const Languages = ({ languages }: any) => {
  return <>
    {languages.map((language: any) => {
      return <span style={{ marginRight: '20px' }} key={language.name}>{language.name}</span>
    })}
  </>
};
