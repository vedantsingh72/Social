import { useRef, useContext } from "react";
import { PostData } from "./store/Card-store";

function Post({ change }) {
  const { addPost } = useContext(PostData);

  const idElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionElement = useRef();
  const tagElement = useRef();

  const handle = (event) => {
    event.preventDefault();

    const id = Date.now();
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reaction = reactionElement.current.value;
    const tag = tagElement.current.value.split(" ");

    addPost(id, title, body, reaction, tag);

    
    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionElement.current.value = "";
    tagElement.current.value = "";

    change("Home");
  };

  return (
    <div>
      <form onSubmit={handle}>

        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" className="form-control" placeholder="how are you!...." ref={titleElement} />
        </div>

        <div className="mb-3">
          <label className="form-label">Body</label>
          <input type="text" className="form-control" placeholder="Aur Batao" ref={bodyElement} />
        </div>

        <div className="mb-3">
          <label className="form-label">Reaction</label>
          <input type="text" className="form-control" placeholder="Reaction to de do bhai" ref={reactionElement} />
        </div>

        <div className="mb-3">
          <label className="form-label">Tags</label>
          <input type="text" className="form-control" placeholder="kya laga dekhkar" ref={tagElement} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Post;
