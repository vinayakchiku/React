

function Person(props)=> {
    const {name, age, city}=props.
  return (
    <div>
      <h3>Name:{name}</h3>
      <h3>age:{age}</h3>
      <h3>{city == undifined ? '':`city:${city}`}</h3>
      <hr />
    </div>
  );
};

export default Person
 
Person.propType {
  name: propTypes,string.isrequired,
  age: propTypes,number.isrequired,
  city: propTypes,string.isrequired,
}