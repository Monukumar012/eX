
import "./AddVideo.css";
import { useState } from 'react';
import axios from 'axios'


function AddVideo() {

  // State 
  const [inputs, setInputs] = useState({
    title: "",
    url: "",
    type: ""
  })


  //Handle Change
  const handleChange = (e) => {
    console.log(e.target.value);
    setInputs((preState) => ({
      ...preState,
      [e.target.name]: e.target.value
    }))
  }

  //Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    //   console.log(inputs);
    const res = await axios.post("http://localhost:8000/videos", inputs);

    const data = res.data;

    if (data.success) {
      setInputs({
        title: "",
        url: "",
        type: ""
      });
      alert(data.msg);
    }
  }


  return (
    <div className='addvideo'>
      <div className="addvideo-top">
        <h1>Add Video</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          name='title'
          id='title'
          type='text'
          placeholder='Title'
          required
          value={inputs.title}
          onChange={handleChange}

        />
        <input
          name='url'
          id='url'
          type='link'
          placeholder='Video Url'
          required
          value={inputs.url}
          onChange={handleChange}

        />

        <select required value={inputs.type} name="type" onChange={handleChange} >
          <option value="">Choose Category</option>
          <option value="motivational">Motivational</option>
          <option value="slow">Slow-Vibes</option>
          <option value="hard">Hard-Core</option>
          <option value="realaxing">Realaxing</option>
          <option value="melodious">Melodious</option>
          <option value="underrated">Underrated</option>
        </select>




        <button>Submit</button>
      </form>
    </div>
  )
}

export default AddVideo;