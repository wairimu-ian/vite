
function ian(){
  let cars= ['BMW','mobius','toyota','lotus'];

  let phones= ['iphone','samsung','tecno','huawei','xiaomi']

  let motorbikes= ['honda','dugati','dayun','BMW','shinery','kawasaki']
  //const name="ian"
  //return (<p>my name is {name}</p>);

  //return(<ul>{value.splice(0,4)}</ul>)
return(
  <div>
  <ul><h3>cars</h3>
    {cars.map(car =>(<li>{car}</li>))}
  </ul>

  <ul><h3> phones</h3> 
     {phones.map(phone =>(<li>{phone}</li>))}
 </ul>

  <ul><h3>bikes</h3>
    {motorbikes.map(bike =>(<li>{bike}</li>))}

  </ul>
 </div>
);

}

export default ian