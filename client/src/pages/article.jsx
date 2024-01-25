import React, { useState, useRef, useMemo, useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updatedPost } from '../redux/updatedPostSlice';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './article.css'; 

const Article = () => {

  const quillRef = useRef(); 

  const imageHandler = async () => {
      const input = document.createElement('input'); 
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');
      input.click(); 

      input.onchange = async () => {
        const file = input.files[0]; 
        if (file) {
          const data = new FormData(); 
          data.set('image', file); 

          try {
            const response = await fetch(`${process.env.REACT_APP_SERVER}/upload-image`, {
              method: "POST",  
              body: data,
          }); 
          const responseData = await response.json(); 
          if (response.ok && responseData.imageUrl) {
          const editor = quillRef.current.getEditor(); 
          const range = editor.getSelection(true); 
          editor.insertEmbed(range.index, 'image', responseData.imageUrl);
          } else {
            console.error('failed to upload file'); 
          }
          } catch (error) {
            console.error(`Error uploading file : ${error}`); 
          }
        } 
      }
  };  

    const toolBarOptions = useMemo(() => ([['bold', 'italic'], ['link', 'image'], ['bold', 'italic', 'underline', 'strike'],       
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }, ],             
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],     
    [{ 'indent': '-1'}, { 'indent': '+1' }],         
    [{ 'direction': 'rtl' }],                        

    [{ 'size': ['small', false, 'large', 'huge'] }], 
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean'] ]), []); 
  
    const modules = useMemo(() => ({toolbar: {container: toolBarOptions, handlers: { image: imageHandler }}}), [toolBarOptions]);
 
    const { post } = useSelector((state) => state.posttoupdate); 
    const dispatch = useDispatch(); 
    const { id } = useParams();
    const navigate = useNavigate(); 

    const [ file, setFile ] = useState(""); 
    const [ titre, setTitre ] = useState(""); 
    const [ description, setDescription ] = useState(""); 
    const [ date, setDate ] = useState(""); 
    const [ category, setCategory ] = useState(""); 
    const [ content, setContent ] = useState(""); 

    useEffect(() => {
      if (post) {
        setFile(post.posts_image); 
        setTitre(post.posts_title);
        setDate(post.posts_date);
        setDescription(post.posts_description);
        setCategory(post.posts_category);
        setContent(post.posts_content);
      }
    }, [post]);

    const handleFile = (event) => setFile(event.target.files[0]); 
    const handleTitre = (event) => setTitre(event.target.value); 
    const handleDescription = (event) => setDescription(event.target.value); 
    const handleDate = (event) => setDate(event.target.value); 
    const handleCategory = (event) => setCategory(event.target.value);

    const handleSubmit = async (event) => {

      event.preventDefault();
      const content = quillRef.current.getEditor().root.innerHTML;

      const data = new FormData();
      if (file instanceof File) {
        data.append('file', file); 
      }  
      data.append('titre', titre); 
      data.append('description', description); 
      data.append('date', date); 
      data.append('category', category);
      data.append('content', content);

      if (id) {
        const newData = {
          posts_image: file ? file : post.posts_image, 
          posts_title: titre, 
          posts_description: description, 
          posts_date: date, 
          posts_category: category, 
          posts_content: content, 
        }; 
        await dispatch(updatedPost({id, post: newData,})).then(() => {navigate('/')});
      } else {
        try {
          const response = await fetch(`${process.env.REACT_APP_SERVER}/article`, {
          method: "POST", 
          body: data,
         }); 
         console.log(`${process.env.REACT_APP_SERVER}/article`); 

         const responseData = await response.json(); 
  
         if (!response.ok) {
           throw new Error("Appel daniel"); 
          } else {
          navigate('/'); 
          return responseData; 
          }
        } catch (error) {
          console.error(error.message); 
        } 
      }; 
  
    }; 

    return (
        <form className="writing--section" onSubmit={handleSubmit} >
            <ReactQuill className="editor" modules={modules} theme="snow" value={content} onChange={setContent} ref={quillRef} />
        <div className="info">
          <div className="item--resume">
            <input placeholder="image" type="file" name="file" id="file" onChange={handleFile} />
            <input required placeholder="Titre :" type="text" name="titre" id="titre" value={titre} onChange={handleTitre} />
            <textarea required placeholder="Resume :" type="text" name="description" id="description"  value={description} onChange={handleDescription} />
            <input required placeholder="date" type="date" name="date" id="date" value={date} onChange={handleDate} />
          </div>
          <div className="item--catégories">
            <h3>Catégories :</h3>
            <div className="label">
            <input type="radio" checked={category === "Croissance"} name="category" id="Croissance" value="Croissance" onChange={handleCategory}/>
            <label htmlFor="Croissance">Croissance</label>
            </div>
            <div className="label">
            <input type="radio" checked={category === "Bien-être"} name="category" id="Bien-être" value="Bien-être" onChange={handleCategory}/>
            <label htmlFor="Bien-être">Bien-Être</label>
            </div>
            <div className="label">
            <input type="radio"  checked={category === "Lifestyle"} name="category" id="Lifestyle" value="Lifestyle" onChange={handleCategory}/>
            <label htmlFor="Lifestyle">Lifestyle</label>
            </div>
            <div className="label">
            <input type="radio" checked={category === "Cuisine"} name="category" id="Cuisine" value="Cuisine" onChange={handleCategory}/>
            <label htmlFor="Cuisine">Cuisine</label>
            </div>
          </div>
          <div className="btn--publier">
            <button  type="submit">
              Publier
            </button>
          </div>
        </div>
      </form>
    )
}; 

export default Article; 