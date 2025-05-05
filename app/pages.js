const getAllItems = async() => {

  const responce = await fetch("http://localhost:3000/api/item/readall", 
    {cache: "no-store"})
  const jsonData = await responce.json()
  const allItems = jsonData.allItems
  return allItems
}

const ReadAllItems = async() => {
  const allItems = await getAllItems()
  return(
    <div>
      <h1 className="h1-style">こんにちは</h1>
      {allItems.map(item =>
        <div>
          <img src={"item.image"}/>
          <h2>{item.price}</h2>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      )}
    </div>
  )
}

export default ReadAllItems