import Card from "./Card";
import { useContext } from "react";
import { PostData } from "./store/Card-store";

function PostList( ) {
  const { postLine , addDataOnline } = useContext(PostData);

  const handleKaro=()=>{
    fetch("http://dummyjson.com/posts")
    .then(res=>res.json())
    .then(data=>{
       addDataOnline(data.posts);
    }
    )
  }


  return (
    <div>
      <div>
        {postLine.length === 0 && <div>No Posts Yet</div>}
        <button onClick={()=>handleKaro()}>Get Post</button>
      </div>

      <div>
        {postLine.map((saare) => (
          <Card key={saare.id} saare={saare} />
        ))}
      </div>
    </div>
  );
}

export default PostList;
