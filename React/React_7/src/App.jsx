import './App.css'

function App() {

  function handleClick(){
    alert("I Am Clicked");
  }

  function handleMouseOver(){
    alert("Para Ke Uper Mouse Lekar Aaye Ho")
  }

  function handleInputChange(e){
    console.log("Value Till Now :",e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    alert("Submit kar du kya??");
  }

  return (
   <div>

      {/* <p onMouseOver={handleMouseOver} style={{border: "1px solid black"}}>
        Hii I Am Pera
      </p>
      <button class="button" onClick={handleClick}>
      Click Me
      </button> */}

          <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleInputChange}/>
            <button  type="submit">Submit</button>
          </form>

   </div>
  )
}

export default App
