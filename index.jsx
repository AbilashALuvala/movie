import React, { useState } from 'react';
import './todo.css';
function Index() {

    const [url, setUrl] = useState('');
    const [mName, setmName] = useState('');
    const [movies, setmovies]= useState('')

    function addMovies(){
      const obj= {
        image: url,
        title: mName
      }
      console.log(obj);
      setmovies([...movies,obj]);
    }

  return (
    <>
      <header>
      <div className='container-fluid bg-dark d-flex justify-content-between'>
        <div className="m-2">
            <img src="https://tse3.mm.bing.net/th?id=OIG2.FwzLf89jgE10nw8iTFqu&pid=ImgGn" height="40"/>
        </div>
        <div className='d-flex align-items-center'><button className='btn btn-primary'>MY BUCKET LIST</button></div>
        <div className='d-flex align-items-center'>
          <input type="url" className="form-control m-1" placeholder='image URL' value={url} onChange={(e)=>setUrl(e.target.value)}/>
          <input type="text" className="form-control m-1" placeholder='movie name' value={mName} onChange={(e)=>setmName(e.target.value)}/>
          <button className='btn btn-success m-1' onClick={addMovies}>Enter</button>
        </div>

        
      </div>
      </header>
      <section className='row'>
        <div className='col-2'>
            <select className='form-select '>
                <option value="2000" className=''>2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                
                <option value="2011">2011</option>
                
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
            </select>
        </div>
        <div className='col-10'>

            {movies && <div className='d-flex'>
            {
              movies.map((m,i)=>(
                <div key={i} className='m-2'>
                  <img src={m.image} height={200}  />
                  <h5>Name: {m.title}</h5>
                  <button className="my-2 btn btn-danger"
                  
                  onClick={()=>{
                    setmovies(movies.filter((x,ind)=>ind!=i))
                  }}>Delete</button>
                </div>
              ))
            }
            
          </div>
          }
        </div>
      </section>
      
    </>
  )
}

export default Index;
