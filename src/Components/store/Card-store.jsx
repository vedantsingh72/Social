
import {createContext,useReducer} from "react";

export const PostData=createContext({
    postLine:[],
    addPost:()=>{},
    deletePost:()=>{},
    addDataOnline:()=>{},
})

    const reducer=(currentPostLine,action)=>{
        let newPostLine=currentPostLine;
        if(action.type==="ADD"){
            newPostLine=[action.payload,...currentPostLine];
        }

        else if(action.type==="DELETE"){
            newPostLine=currentPostLine.filter((post)=>
                post.id!==action.payload.id
            )
        }

        else if(action.type==="ONLINE"){
            newPostLine=action.payload.posts;
        }
        return newPostLine;
     }



const PostDataProvider=({children})=>{
    const[postLine ,dispatchPostLine]=useReducer(reducer,[]);

    const deletePost=(id)=>{  
        dispatchPostLine({
           type:"DELETE",
           payload:{
            id,
           }
        }
        )
    };

    const addPost=(id,title,body,reaction,tag)=>{
        dispatchPostLine(
           {
              type:"ADD",
              payload:{
                id:Date.now(),
                title,
                body,
                reaction,
                tag,
              }
           }
        )
    };

    const addDataOnline=(posts)=>{
        dispatchPostLine(
            {
                type:"ONLINE",
                payload:{
                    posts,
                }
            }
        )
    }

return <PostData.Provider value={{
        postLine:postLine,
        addPost:addPost,
        deletePost:deletePost,
        addDataOnline:addDataOnline,
        }}>
        {children}
    </PostData.Provider>
}

export default PostDataProvider;


