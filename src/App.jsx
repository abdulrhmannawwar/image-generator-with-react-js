import { useState } from 'react'
import './App.css'

function App() {
  const [imgSrc,setImgSrc] = useState('https://image.pollinations.ai/prompt/');
  const [text,setText] = useState('');

  const handleClick = () =>{
        let prompt = text.split(' ').join('_');
        setImgSrc(`https://image.pollinations.ai/prompt/${prompt}`);
  }

  async function downloadImage() {
    const link = document.createElement('a');
    link.href = imgSrc;
    link.download = 'your-image.jpg'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <>
    <h3>Image Generator by Abdo Nawwar</h3>
    <p>(if you get the same image multiple times just write the same prompt followed by a number,<br />example: a dog in a spaceship0)</p>
    <p>Generating images can take some time, so please be patient</p>
    <div className='container'>
      <div className="imgContainer">
      <img src={imgSrc} className='img' />
      <button onClick={downloadImage}>Download image</button>
      </div>
      <div className="inputContainer">
        <input type="text"
        placeholder='Type something'
        value={text}
        onChange={
          (e)=>{
            setText(e.target.value);
          }
        }
        onKeyDown={
          (e)=>{
            if(e.key === 'Enter'){
              handleClick();
            }
          }
        }
        />
        <button onClick={handleClick}>Generate</button>
      </div>
    </div>
    </>
  )
}

export default App
